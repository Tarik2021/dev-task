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

* note: you can run app without it on default values and local database

#### Server

- PORT=server port 
- MONGO_URI=connection string to your database
- JWT_SECRET=secret word for jwt tokens
- GOOGLE_ID=google id string

#### Client
- REACT_APP_BASE_URL=url connection to server
- REACT_APP_GOOGLE_ID=google id string

## Running Application

-  Open two terminals and do the following commands

#### Server

-  cd server
-  npm run seed 
* note: database is seeded from external api
-  npm i
-  npm start

#### Client

-  cd client
-  npm i
-  npm start
