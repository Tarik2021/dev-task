# mistral-task

## Features:

#### For all users

-  Show top 250 movies (10 by 10)
-  Show top 250 shows (10 by 10)
-  Sorted by Movie/Show rating
-  Search of Movies/Shows
-  OAuth authentication

#### For logged in users

-  User can rate Movie/Show and correct ratings if he wants
-  List of user rated Movies/Shows
-  Log out

#### Searching

-  Standard search of item attributes (title, actors, year and rating)
-  Search by years (examples: "before 1990", "after 2001")
-  Search by stars (examples: "more than 4 stars", "less than 4.3 stars")

## .env files

#### Server
PORT=server port

#### Client


## Running Application

-  Open two terminals and do the following commands

#### Server

-  cd server
-  npm run seed note: database is seeded from external api
-  npm i
-  npm start

#### Client

-  cd client
-  npm i
-  npm start
