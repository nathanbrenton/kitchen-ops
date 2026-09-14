# Imports

# BaseModel is Pydantic's base class for data models
from pydantic import BaseModel, Field


# Pydantic model class
class RootResponse(BaseModel):
    # message = Model field   |   str = type annotation
    message: str

# Request model for incoming recipe data
class RecipeCreate(BaseModel):
    # min_length = "validation constraint"
    name: str = Field(min_length=1)
