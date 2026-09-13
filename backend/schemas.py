# Imports

# BaseModel is Pydantic's base class for data models
from pydantic import BaseModel


# Pydantic model class
class RootResponse(BaseModel):
    # message = Model field   |   str = type annotation
    message: str
