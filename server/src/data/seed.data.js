const mongoose = require("mongoose");
const axios = require("axios");

const { config } = require("../config/config");
const { Movie } = require("../models/movie.model");
const { Show } = require("../models/show.model");
const { User } = require("../models/user.model");

const MOVIES_URL = "https://imdb-api.com/en/API/Top250Movies/k_ow6127mj";
const SHOWS_URL = "https://imdb-api.com/en/API/Top250Tvs/k_ow6127mj";

async function seedData() {
   mongoose.connect(config.mongoUri).catch((err) => console.log(err));

   await Movie.deleteMany({});
   await Show.deleteMany({});
   await User.deleteMany({});

   let movies;
   await axios.get(MOVIES_URL).then((res) => (movies = res.data.items));
   for (let i in movies) await new Movie(movies[i]).save();

   let shows;
   await axios.get(SHOWS_URL).then((res) => (shows = res.data.items));
   for (let i in shows) await new Show(shows[i]).save();

   console.log("Database seeded");
   process.exit();
}

seedData();
