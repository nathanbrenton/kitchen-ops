# KitchenOps / FastAPI Offline Swagger UI

## Purpose

This guide documents how to preserve and reuse FastAPI Swagger UI browser assets so `/docs` remains fully available without Internet access.

KitchenOps uses:

- Python package cache: `~/Desktop/python-packages/`
- npm/browser asset cache: `~/Desktop/npm-packages/`
- KitchenOps backend: `~/Desktop/kitchen-ops/backend/`

The FastAPI Python runtime is already installed offline from local wheels. This document covers only the browser assets used by Swagger UI.

---

## Recovered Offline Dev Lab asset bundle

A previously prepared `swagger-ui.zip` was recovered from Offline Dev Lab.

It contains:

```text
swagger-ui/
├── swagger-ui-bundle.js
├── swagger-ui.css
└── favicon.png
```

The recovered JavaScript bundle embeds:

```text
Swagger UI VERSION: 5.32.8
```

The bundle therefore gives KitchenOps a known Swagger UI 5.x asset set without requiring another Internet download.

### Important license note

The JavaScript bundle contains a comment referring to:

```text
swagger-ui-bundle.js.LICENSE.txt
```

but that license file is not present in the recovered ZIP.

Before redistributing the vendored Swagger UI files publicly, preserve the applicable upstream Swagger UI license/notice alongside the assets. `swagger-ui-dist` is distributed under Apache-2.0.

---

# Recommended reusable storage

Preserve the recovered assets independently from KitchenOps so future projects can reuse them:

```text
~/Desktop/npm-packages/
└── fastapi-offline-docs-vendor-backup/
    ├── swagger-ui-bundle.js
    ├── swagger-ui.css
    ├── favicon.png
    ├── README.md
    └── LICENSE-swagger-ui-dist      # add/preserve separately
```

KitchenOps should receive its own project-local copy:

```text
~/Desktop/kitchen-ops/backend/
├── main.py
├── docs.py
└── static/
    └── swagger-ui/
        ├── swagger-ui-bundle.js
        ├── swagger-ui.css
        ├── favicon.png
        └── LICENSE-swagger-ui-dist
```

This keeps the reusable source bundle separate from the files required by the application itself.

---

# Step 1 — Preserve the recovered files

Create the reusable asset directory:

```bash
VENDOR="$HOME/Desktop/npm-packages/fastapi-offline-docs-vendor-backup"

mkdir -p "$VENDOR"
```

Copy the three recovered files into that directory:

```bash
cp \
  swagger-ui-bundle.js \
  swagger-ui.css \
  favicon.png \
  "$VENDOR/"
```

If working directly from the recovered ZIP instead:

```bash
mkdir -p "$VENDOR"

unzip -j swagger-ui.zip \
  'swagger-ui/swagger-ui-bundle.js' \
  'swagger-ui/swagger-ui.css' \
  'swagger-ui/favicon.png' \
  -d "$VENDOR"
```

Verify:

```bash
ls -lh "$VENDOR"
```

---

# Step 2 — Record integrity hashes

Hashes make it possible to verify that future project copies are byte-for-byte identical to the preserved source assets.

```bash
VENDOR="$HOME/Desktop/npm-packages/fastapi-offline-docs-vendor-backup"

shasum -a 256 \
  "$VENDOR/swagger-ui-bundle.js" \
  "$VENDOR/swagger-ui.css" \
  "$VENDOR/favicon.png"
```

Recovered-bundle SHA-256 values:

```text
swagger-ui-bundle.js
97f03cdae8b9f09f8f33b604ed4796bd318c378e90763b468bb4aa0860bd90a7

swagger-ui.css
ca238f7d7c2cf4480c1e77a9c3b9da915ab216e96ffd354e69076560c650c6de

favicon.png
d16f72cf5a2773eba499cc7f3db1923c6f5f73de990f739e3a05806aafec15b7
```

---

# Step 3 — Copy assets into KitchenOps

Create the KitchenOps static directory:

```bash
PROJECT="$HOME/Desktop/kitchen-ops/backend"
VENDOR="$HOME/Desktop/npm-packages/fastapi-offline-docs-vendor-backup"

mkdir -p "$PROJECT/static/swagger-ui"
```

Copy the preserved files:

```bash
cp \
  "$VENDOR/swagger-ui-bundle.js" \
  "$VENDOR/swagger-ui.css" \
  "$VENDOR/favicon.png" \
  "$PROJECT/static/swagger-ui/"
```

If the upstream license file has been preserved, copy it too:

```bash
cp \
  "$VENDOR/LICENSE-swagger-ui-dist" \
  "$PROJECT/static/swagger-ui/"
```

Verify:

```bash
find "$PROJECT/static/swagger-ui" \
  -maxdepth 1 \
  -type f \
  -print | sort
```

---

# Step 4 — Disable FastAPI's default CDN-backed Swagger UI

KitchenOps currently creates the application with:

```python
app = FastAPI()
```

Change it to:

```python
app = FastAPI(
    docs_url=None,
)
```

### Why

FastAPI's built-in `/docs` route generates a page that references Swagger UI assets hosted externally.

Setting:

```python
docs_url=None
```

disables only that automatic Swagger UI route.

The OpenAPI schema remains available at:

```text
/openapi.json
```

unless `openapi_url` is also explicitly disabled.

---

# Step 5 — Create a custom offline docs router

Create:

```text
~/Desktop/kitchen-ops/backend/docs.py
```

with:

```python
from fastapi import APIRouter
from fastapi.openapi.docs import get_swagger_ui_html


router = APIRouter()


@router.get("/docs", include_in_schema=False)
def custom_swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url="/openapi.json",
        title="KitchenOps API - Swagger UI",
        swagger_js_url="/static/swagger-ui/swagger-ui-bundle.js",
        swagger_css_url="/static/swagger-ui/swagger-ui.css",
        swagger_favicon_url="/static/swagger-ui/favicon.png",
    )
```

## Python / FastAPI terminology

### `APIRouter`

`APIRouter` groups related FastAPI path operations.

It lets `/docs` live outside `main.py` while still being attached to the same FastAPI application.

### Decorator

```python
@router.get("/docs", include_in_schema=False)
```

is a Python decorator.

FastAPI uses it to register the function below as an HTTP `GET /docs` route.

### `include_in_schema=False`

This prevents the documentation route itself from appearing as an API operation inside its own OpenAPI documentation.

### `get_swagger_ui_html`

This FastAPI helper generates the HTML shell for Swagger UI.

The key difference from FastAPI's default route is that the JavaScript, CSS, and favicon URLs now point to local KitchenOps paths.

---

# Step 6 — Mount the local static directory

Update:

```text
~/Desktop/kitchen-ops/backend/main.py
```

Import:

```python
from fastapi.staticfiles import StaticFiles

from docs import router as docs_router
```

Create the FastAPI application with default Swagger UI disabled:

```python
app = FastAPI(
    docs_url=None,
)
```

Mount the project-local static directory:

```python
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static",
)
```

Include the custom docs router:

```python
app.include_router(docs_router)
```

A minimal complete `main.py` would look like:

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from docs import router as docs_router


app = FastAPI(
    docs_url=None,
)


app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static",
)


app.include_router(docs_router)


@app.get("/")
def read_root():
    return {"message": "KitchenOps API"}
```

---

# Step 7 — Run KitchenOps on its dedicated backend port

KitchenOps reserves:

```text
Backend / FastAPI: 18080
Frontend / Vite:   15173
PostgreSQL:        15432
```

From:

```text
~/Desktop/kitchen-ops/backend/
```

run:

```bash
python3 -m uvicorn main:app \
  --host 127.0.0.1 \
  --port 18080 \
  --reload
```

---

# Step 8 — Validate

Test:

```text
http://127.0.0.1:18080/
http://127.0.0.1:18080/docs
http://127.0.0.1:18080/openapi.json
```

Also verify the static files directly:

```text
http://127.0.0.1:18080/static/swagger-ui/swagger-ui-bundle.js
http://127.0.0.1:18080/static/swagger-ui/swagger-ui.css
http://127.0.0.1:18080/static/swagger-ui/favicon.png
```

---

# Step 9 — True offline test

To prove that Swagger UI is no longer dependent on a CDN:

1. Load `/docs` once.
2. Open browser Developer Tools.
3. Open the Network tab.
4. Disable Wi-Fi / Internet access.
5. Hard-refresh `/docs`.
6. Execute `GET /` from Swagger UI.

Expected behavior:

- Swagger UI still renders.
- CSS styling remains present.
- the favicon still loads.
- `GET /` can still execute.
- all required resources come from `127.0.0.1:18080`.
- no CDN connection is required.

---

# ReDoc

The recovered Offline Dev Lab bundle contains Swagger UI assets only.

It does **not** contain:

```text
redoc.standalone.js
```

Therefore `/redoc` should not yet be claimed as fully offline.

If KitchenOps wants offline ReDoc later:

1. preserve a pinned `redoc.standalone.js`;
2. serve it under `static/`;
3. create a custom ReDoc route;
4. set `with_google_fonts=False`;
5. validate with the network disconnected.

Swagger UI is sufficient for the initial KitchenOps backend development workflow.

---

# Relationship to the Python offline package cache

This browser-asset setup is separate from the FastAPI Python installation.

KitchenOps Python assets are stored under:

```text
~/Desktop/python-packages/
```

For example:

```bash
python3 -m pip install \
  --no-index \
  --find-links "$HOME/Desktop/python-packages" \
  fastapi==0.141.1 \
  uvicorn==0.52.4
```

That installs the backend runtime offline.

The Swagger UI vendor backup under:

```text
~/Desktop/npm-packages/fastapi-offline-docs-vendor-backup/
```

provides the browser-side API documentation resources.

Together, they allow the KitchenOps FastAPI backend and Swagger UI development environment to operate without Internet access.

---

# Offline asset architecture

```text
~/Desktop/python-packages/
└── FastAPI / Pydantic / Uvicorn wheels + dependencies


~/Desktop/npm-packages/
├── react-offline-vendor-backup/
│   └── browser-ready React assets
│
└── fastapi-offline-docs-vendor-backup/
    ├── swagger-ui-bundle.js
    ├── swagger-ui.css
    ├── favicon.png
    ├── LICENSE-swagger-ui-dist
    └── README.md


~/Desktop/kitchen-ops/
└── backend/
    ├── .venv/
    ├── main.py
    ├── docs.py
    └── static/
        └── swagger-ui/
            ├── swagger-ui-bundle.js
            ├── swagger-ui.css
            ├── favicon.png
            └── LICENSE-swagger-ui-dist
```

---

# Design principle

Keep three concerns separate:

1. **Reusable offline source assets**
   - `~/Desktop/python-packages/`
   - `~/Desktop/npm-packages/`

2. **Project-local vendored runtime assets**
   - `KitchenOps/backend/static/`

3. **Application configuration**
   - `main.py`
   - `docs.py`

This makes future offline FastAPI projects reproducible without coupling them to KitchenOps itself.
