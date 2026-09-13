from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from docs import router as docs_router


# Instantiate the FastAPI application object and assign it to "app".
# docs_url=None disables FastAPI's default CDN-backed Swatter UI route.
app = FastAPI(
    docs_url=None,
)


# Mount the local "static" directory at the URL path "/static".
# This allows the browser to request our local Swaagger UI JavaScript,
# CSS, favicon, and other static files through the FastAPI application.
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static",
)


# Add the path operations defined by docs_router to this FastAPI application.
# This adds our custom, offline GET /docs route.
app.include_router(docs_router)



# Decorator: register the function below as the path operation for HTTP GET /.
@app.get("/")
# Function: root route handler. (FastAPI: "path operation function")
def read_root():
    # Return a Python dictionary.
    # FastAPI serializes it into a JSON HTTP response.
    return {"message": "KitchenOps API"}
