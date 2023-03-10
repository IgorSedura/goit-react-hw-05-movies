import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/Api';
import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title ?? movie.name}
            </Link>
          </li>
        ))}
      </ul>

      <Toaster />
    </div>
  );
};

export default Home;
