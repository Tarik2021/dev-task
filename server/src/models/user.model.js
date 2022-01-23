const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.User = mongoose.model(
   "User",
   new Schema({
      googleId: String,
      movies: [{ id: { type: mongoose.Schema.ObjectId, ref: "Movie" }, stars: Number }],
      shows: [{ id: { type: mongoose.Schema.ObjectId, ref: "Show" }, stars: Number }],
   })
);
