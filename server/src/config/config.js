require("dotenv").config();

exports.config = {
   googleId: process.env.GOOGLE_ID || "485732674724-b8pg8jbdh3ntg6ohoe6g1nmhqeu7meqt.apps.googleusercontent.com",
   port: process.env.PORT || 4400,
   jwtSecret: process.env.JWT_SECRET || "paragon",
   mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/helloMistral",
};
