from fastapi import APIRouter, status

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
def create_recipe(recipe: RecipeCreate):
    return {
        "id": 1,
        "name": recipe.name,
    }
