const fatch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTgyNGZhMmFhY2FhZDNlNzMwMmY5NDM2YjYzNGNlNiIsInN1YiI6IjY1ZjAwZWYwOTQ2MzE4MDE4NTYxODc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RX9WJ0-yxJEvHww8KqLucMqZbmKwiu802Nc32L69PEo",
  },
};

export const getMovie = (page) => {
  const url = baseUrl + `movie/now_playing?&page=${page}`;
  return fatch(url, options).then((res) => res.json());
};
