from fastapi import APIRouter
from fastapi.openapi.docs import get_swagger_ui_html


# Create an APIRouter instance and assign it to the variable "router".
# This router will contain path operations that can later be added to the FastAPI app.
router = APIRouter()


# Decorator: register the function below as the path operation for HTTP GET /docs.
# include_in_schema=False excludes this /docs operation from the generated OpenAPI schema.
@router.get("/docs", include_in_schema=False)
def custom_swagger_ui_html():
    # Generate and return the Swagger UI HTML response.
    # These URLs point to locally hosted assets instead of CDN-hosted files.
    return get_swagger_ui_html(
        openapi_url="/openapi.json",
        title="KitchenOps API - Swagger UI",
        swagger_js_url="/static/swagger-ui/swagger-ui-bundle.js",
        swagger_css_url="/static/swagger-ui/swagger-ui.css",
        swagger_favicon_url="/static/swagger-ui/favicon.png",
    )

