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
