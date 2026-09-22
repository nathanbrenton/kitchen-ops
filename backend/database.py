from sqlalchemy.orm import DeclarativeBase


# SQLAlchemy has three foundational concepts that we will introduce separately:
#
# 1. Engine
#    Manages how SQLAlchemy communicates with a database.
#    We will create this later when we are ready to configure PostgreSQL.
#
# 2. Session
#    Represents a unit of work with the database.
#    Application code will eventually use sessions to query, add, update,
#    and delete database-backed objects.
#
# 3. Declarative Base
#    Provides the common parent class for SQLAlchemy ORM model classes.
#    Classes such as Recipe will eventually inherit from Base so SQLAlchemy
#    knows they describe database tables.
#
# For this step, we are introducing only the Declarative Base.
class Base(DeclarativeBase):
    pass
