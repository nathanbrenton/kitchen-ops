# KitchenOps

A full-stack kitchen operations platform for recipes, nutrition, meal planning, inventory, and grocery workflows.




## Local Backend Startup

KitchenOps currently runs its FastAPI backend locally with Uvicorn.

### 1. Open the project

```bash
cd "$HOME/Desktop/kitchen-ops"
```

### 2. Enter the backend directory

```bash
cd backend
```

### 3. Activate the Python virtual environment

```bash
source .venv/bin/activate
```

The shell prompt should now show `(.venv)`.

### 4. Start the FastAPI development server

```bash
python3 -m uvicorn main:app \
  --host 127.0.0.1 \
  --port 18080 \
  --reload
```

KitchenOps reserves port `18080` for the local backend.

### 5. Open the API

Root endpoint:

```text
http://127.0.0.1:18080/
```

Offline Swagger UI:

```text
http://127.0.0.1:18080/docs
```

OpenAPI schema:

```text
http://127.0.0.1:18080/openapi.json
```

The Swagger UI JavaScript, CSS, and favicon are served locally from the KitchenOps backend and do not require CDN access.

### 6. Stop the development server

Press:

```text
Ctrl+C
```

### Optional: basic API checks

Check the root endpoint:

```bash
curl -i http://127.0.0.1:18080/
```

Create the current example recipe:

```bash
curl -i \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Basic Oatmeal"}' \
  http://127.0.0.1:18080/recipes
```

Expected creation status:

```text
HTTP/1.1 201 Created
```
