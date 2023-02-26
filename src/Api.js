import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '1ea490a87cdb6e5e1307c3207f6746f9';

export const getTrendingMovies = async () => {
  const response = await axios.get(`3/trending/all/day?api_key=${API_KEY}`);
  return response.data;
};
