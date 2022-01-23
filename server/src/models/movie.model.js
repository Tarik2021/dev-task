const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { SCHEMA } = require("./imdb.schema");

exports.Movie = mongoose.model("Movie", new Schema(SCHEMA));
