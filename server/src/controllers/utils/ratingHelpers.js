exports.rating = (user, category, stars, id) => {
   let existingRating = user[category].find((c) => c.id.toString() === id);
   let index = user[category].indexOf(existingRating);
   if (existingRating) {
      user[category][index].stars = stars;
   } else user[category].push({ id, stars });
};
