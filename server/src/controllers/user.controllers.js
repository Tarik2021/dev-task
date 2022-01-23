const { User } = require("../models/user.model");
const { rating } = require("./utils/ratingHelpers");
const { config } = require("../config/config");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const client = new OAuth2Client(config.googleId);

exports.login = async (req, res, next) => {
   const { tokenId, googleId } = req.body;

   let verifyUser;
   try {
      verifyUser = await client.verifyIdToken({ idToken: tokenId, audience: config.googleId });
   } catch (error) {
      res.status(400).json({ error: "Login failed!" });
      return next(error);
   }

   let existingUser = await User.findOne({ googleId }).populate("movies.id").populate("shows.id");

   if (existingUser) {
      const token = jwt.sign({ id: existingUser._id }, config.jwtSecret, { expiresIn: "1d" });

      res.json({ user: existingUser, token });
   } else {
      let newUser = new User({ googleId });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, config.jwtSecret, { expiresIn: "1d" });

      res.json({ user: newUser, token });
   }
};

exports.rate = async (req, res, next) => {
   const { stars, id } = req.body;
   const userId = req.user.id;

   let category = req.params.category;
   if (category.startsWith("my")) category = category.slice(3);

   let user = await User.findById(userId);

   rating(user, category, stars, id);

   await user.save();

   user = await User.findById(userId).populate("movies.id").populate("shows.id");

   res.json({ movies: user.movies, shows: user.shows });
};
