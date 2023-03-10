import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '1ea490a87cdb6e5e1307c3207f6746f9';
const lang = 'en-US';
const page = '1';

axios.defaults.params = {
  api_key: API_KEY,
  language: lang,
  page: page,
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`3/trending/all/day?`);
  return response.data;
};

export const fetchMovieDetails = async id => {
  const responce = await axios.get(`3/movie/${id}?&`);
  return responce.data;
};

export const searchMovie = async query => {
  const response = await axios.get(
    `3/search/movie?&&query=${query}&include_adult=false`
  );
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`3/movie/${id}/credits?&`);
  return response.data;
};
export const getMovieReviews = async id => {
  const response = await axios.get(`3/movie/${id}/reviews?&&`);

  return response.data;
};
