function searchByTerm(data, term) {
   return data.filter((d) => {
      return d.title.toLowerCase().includes(term) || d.crew.toLowerCase().includes(term) || d.year == term;
   });
}

function searchByStars(data, term, numberOfStars) {
   if (term.includes("more")) {
      return data.filter((d) => d.imDbRating / 2 > numberOfStars);
   }
   if (term.includes("less")) {
      return data.filter((d) => d.imDbRating / 2 < numberOfStars);
   }
}

function searchByYear(data, term, yearOfRelease) {
   if (term.includes("after")) {
      return data.filter((d) => yearOfRelease < d.year);
   }
   if (term.includes("before")) {
      return data.filter((d) => yearOfRelease > d.year);
   }
}

module.exports = { searchByTerm, searchByStars, searchByYear };
