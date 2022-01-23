const { Movie } = require("../models/movie.model");
const { Show } = require("../models/show.model");
const { searchByTerm, searchByStars, searchByYear } = require("./utils/searchHelpers");

exports.getData = async (req, res, next) => {
   const category = req.params.category;

   let data;
   if (category === "movies") data = await Movie.find({});
   if (category === "shows") data = await Show.find({});

   res.json(data);
};

exports.searchData = async (req, res, next) => {
   const category = req.params.category;
   const term = req.params.term.toLowerCase();
   const number = /[+-]?\d+(\.\d+)?/g;
   const yearConditions = ["younger", "older", "before", "after"];

   let data;
   let searchResult;
   let numberOfStars;
   let yearOfRelease;

   if (term.includes("stars") && term.match(number)) {
      numberOfStars = parseFloat(term.match(number)[0]);
   }

   if (yearConditions.some((y) => term.includes(y)) && term.match(number)) {
      if (term.match(number)[0] > 999) {
         yearOfRelease = term.match(number)[0];
      }
   }

   function searchDatabase(data) {
      if (numberOfStars) {
         return searchByStars(data, term, numberOfStars);
      } else if (yearOfRelease) {
         return searchByYear(data, term, yearOfRelease);
      } else return searchByTerm(data, term);
   }

   if (category === "movies") {
      data = await Movie.find({});
      searchResult = searchDatabase(data);
   }

   if (category === "shows") {
      data = await Show.find({});
      if (numberOfStars) {
         searchResult = searchByStars(data, term, numberOfStars);
      } else if (yearOfRelease) {
         searchResult = searchByYear(data, term, yearOfRelease);
      } else searchResult = searchByTerm(data, term);
   }

   res.json(searchResult);
};
