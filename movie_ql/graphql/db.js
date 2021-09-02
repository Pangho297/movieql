import axios from "axios";

export const getMovies = async (limit, rating) => {
  let API_URL = "https://yts.mx/api/v2/list_movies.json?";

  if (limit > 0) {
    API_URL += `limit=${limit}`;
  }

  if (rating > 0) {
    API_URL += `&minimum_rating=${rating}`;
  }

  const axiosData = await axios(`${API_URL}`, {
    params: {
      limit,
      rating,
    },
  });

  return axiosData.data.data.movies;
};
