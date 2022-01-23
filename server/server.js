const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const { config } = require("./src/config/config");

const userRoutes = require("./src/routes/user.routes");
const imdbRoutes = require("./src/routes/imdb.routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/imdb", imdbRoutes);

mongoose
   .connect(config.mongoUri)
   .then(() => app.listen(config.port), console.log(`Server running on port ${config.port}`))
   .catch((error) => console.log(error));
