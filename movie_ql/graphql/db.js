let movies = [
  {
    id: 0,
    name: "Star wars - The new one",
    score: 2,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 5,
  },
  {
    id: 2,
    name: "The Godfather 1",
    score: 5,
  },
  {
    id: 3,
    name: "Logan",
    score: 3,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterdMovies = movies.filter((movie) => id === movie.id);
  return filterdMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
