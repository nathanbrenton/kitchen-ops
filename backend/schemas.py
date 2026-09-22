# Imports

# BaseModel is Pydantic's base class for data models
from pydantic import BaseModel, Field, field_validator


# Pydantic model class
class RootResponse(BaseModel):
    # message = Model field   |   str = type annotation
    message: str

# Request model for incoming recipe data
# data the client sends
class RecipeCreate(BaseModel):
    # Require at least one character after validation/normalization.
    name: str = Field(min_length=1)

    # A field validator lets us inspect or transform a field's value.
    # mode="before" means this runs before Pydantic applies the normal
    # validation rules for "name", including min_length=1.
    @field_validator("name", mode="before")
    @classmethod
    def strip_name(cls, value):
        # If the incoming value is a string, remove leading/trailing whitespace.
        # Example: "  Basic Oatmeal "" becomes "Basic Oatmeal",
        #
        # If the value is not a string, return it unchanged and let Pydantic's
        # normal type validation decide whether it is valid.
        if isinstance(value, str):
            return value.strip()

        return value

#    # min_length = "validation constraint"
#    name: str = Field(min_length=1)


# Data the server returns
class RecipeResponse(BaseModel):
  id: int
  name: str
