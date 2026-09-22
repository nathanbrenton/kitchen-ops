from fastapi.testclient import TestClient

from main import app


# Create a TestClient instance for the FastAPI application.
# TestClient lets us send simulated HTTP requests directly to the app
# without starting Uvicorn or opening a real network port.
client = TestClient(app)


def test_read_root():
    # Simulate an HTTP GET request to the root path operation.
    response = client.get("/")

    # "assert" is Python's built-in assertion statement.
    # pytest treats a failed assertion as a failed test.
    assert response.status_code == 200

    # response.json() converts the JSON response body into a Python object.
    # Here we verify both the structure and exact content of the response.
    assert response.json() == {"message": "KitchenOps API"}

def test_create_recipe():
    # Simulate an HTTP POST request to /recipes.
    # The "jaon" argument teslls TestClient to encode this Python dictionary
    # as a JSON request body and send the appropriate Content-Type header.
    response = client.post(
        "/recipes",
        json={"name": "Basic Oatmeal"},
    )

    # Creating a new resource should return HTTP 201 Created.
    assert response.status_code == 201

    # Verify that FastAPI returned the expected RecipeResponse structure.
    # The current ID is still a temporary hard-coded value; there is no 
    # database or persistance layer yet.
    assert response.json() == {
        "id": 1,
        "name": "Basic Oatmeal",
    }

def test_create_recipe_rejects_empty_name():
    # Send an invalid recipe request.
    # RecipeCreate requires the "name" string to contain at least 1 character.
    response = client.post(
        "/recipes",
        json={"name": ""},
    )

    # FastAPI returns HTTP 422 when Pydantic rejects the request body.
    assert response.status_code == 422

    # Inspect the first validation error returned by FastAPI.
    error = response.json()["detail"][0]

    # Confirm that the validation failure applies specifically to body.name.
    assert error["loc"] == ["body", "name"]

    # Pydantic identifies this constraint failure as "string_too_short".
    assert error["type"] == "string_too_short"

def test_create_recipe_rejects_whitespace_only_name():
    # This request contains characters, but they are only spaces.
    # The RecipeCreate field validator should strip the whitespace first,
    # turning "    " into and empty string.
    response = client.post(
        "/recipes",
        json={"name": "    "},
    )

    # After stripping, min_length=1 should reject the empty string.
    assert response.status_code == 422

    # Confirm that the validation error still points to body.name.
    error = response.json()["detail"][0]

    assert error["loc"] == ["body", "name"]
    assert error["type"] == "string_too_short"

def test_create_recipe_strips_surrounding_whitespace():
    # The incoming recipe name contains extra leading/trailing whitespace.
    # The RecipeCreate field validator should normalize it before the
    # path operation receives the validated model instance.
    response = client.post(
        "/recipes",
        json={"name": "  Basic Oatmeal  "},
    )

    # The request is still valid, so recipe creation should succeed.
    assert response.status_code == 201

    # The response should contain the normalized name rather than the
    # whitespace-padded value sent by the client.
    assert response.json() == {
        "id": 1,
        "name": "Basic Oatmeal",
    }


