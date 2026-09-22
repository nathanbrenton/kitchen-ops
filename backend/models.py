from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from database import Base


class Recipe(Base):
    # SQLAlchemy uses __tablename__ to identify the database table that
    # this ORM model will eventually map to.
    #
    # Defining this class does NOT create the table yet.
    __tablename__ = "recipes"

    # "Mapped[int]" tells SQLAlchemy that this Python attribute participates
    # in the ORM mapping and contains integer values.
    #
    # primary_key=True makes this column the table's primary key.
    # A primary key uniquely identifies each row in a relational database.
    id: Mapped[int] = mapped_column(primary_key=True)

    # String is SQLAlchemy's database string type.
    #
    # nullable=False means a database row must contain a value for "name".
    #
    # Pydantic still handles API validation separately. This constraint belongs
    # to the database model and protects data at the persistence layer.
    name: Mapped[str] = mapped_column(
        String,
        nullable=False,
    )
