const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

exports.auth = (req, res, next) => {
   if (req.method === "OPTIONS") {
      return next();
   }
   try {
      const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
      if (!token) {
         throw new Error("Authentication failed!", 403);
      }
      const decodedToken = jwt.verify(token, config.jwtSecret);
      req.user = { id: decodedToken.id };
      next();
   } catch (err) {
      const error = new Error("Authentication failed!!", 403);
      return next(error);
   }
};
