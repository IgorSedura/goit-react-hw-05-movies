import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Api';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);

        const { results } = await getTrendingMovies();
        setMovie(results);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getMovie();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <h1>Movie Trend</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title ?? movie.name}</Link>
          </li>
        ))}
      </ul>

      <Toaster />
    </div>
  );
};
