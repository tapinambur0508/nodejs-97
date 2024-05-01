const movies = require("./movies");

movies
  .readMovies()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
