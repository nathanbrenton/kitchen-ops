from fastapi import APIRouter, HTTPException, status

from schemas import RecipeCreate, RecipeResponse


router = APIRouter(
    prefix="/recipes",
    tags=["recipes"],
)


# Route decorator
@router.post(
    "",
    response_model=RecipeResponse,
    status_code=status.HTTP_201_CREATED,
)

# Function:
def create_recipe(recipe: RecipeCreate):
    return {
        "id": 1,
        "name": recipe.name,
    }


@router.get(
    "/{recipe_id}",
    response_model=RecipeResponse,
)
def read_recipe(recipe_id: int):
    # "{recipe_id}" is a FastAPI path parameter.
    # For a request such as GET /recipes/1, FastAPI extracts "1"
    # from the URL and passes it into this function as recipe_id.
    #
    # The Annotation ": int" tells FastAPI that recipe_id must be
    # convertible to an integer. FastAPI validates that automatically.

    # We do not have a database yet, so ID 1 temporarily represents
    # the one recipe currently known to this demonstration API.
    if recipe_id != 1:
        # HTTPException stops normal path-operation execution and returns
        # an HTTP error response to the client.
        # 
        # 404 Not Found means that the requested resource does not exist.
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Recipe not found",
        )

    # This temporary dictionary represents the resource that a future
    # database query will eventually retrieve.
    return {
        "id": 1,
        "name": "Basic Oatmeal",
    }
