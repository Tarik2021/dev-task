const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { SCHEMA } = require("./imdb.schema");

exports.Show = mongoose.model("Show", new Schema(SCHEMA));
