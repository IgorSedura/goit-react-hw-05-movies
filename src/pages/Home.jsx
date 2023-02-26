import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Api';
// import toast, { Toaster } from 'react-hot-toast';

export const Home = () => {
  const [movies, setMovie] = useState([]);
  //   const [isLoding, setIsLoading] = useState(false);
  useEffect(() => {
    getTrendingMovies().then(({ results }) => {
      setMovie(results);
    });
  }, []);

  //   useEffect(() => {
  //     async function getMovie() {
  //       try {
  //         setIsLoading(true);

  //         const { results } = await getTrendingMovies();
  //         setMovie(results);
  //       } catch (error) {
  //         toast.error('Oops! Something went wrong! Please try again.');
  //       }
  //     }
  //   }, []);

  return (
    <div>
      <h1>Movie Trend</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}> {movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
};
