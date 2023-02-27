import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieDetails } from 'Api';
import { Loader } from 'components/Loader/Loader';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const params = useParams();
  const { id } = params;
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getMovie() {
      try {
        setIsLoading(true);

        const results = await fetchMovieDetails(id);

        console.log(results);

        setMovieDetails(results);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [id]);
  const { title, poster_path } = movieDetails;
  return (
    <>
      {isLoading && <Loader />}
      {poster_path && (
        <img src={`${BASE_IMG_URL}${poster_path}`} alt="Movie poster" />
      )}
      {!poster_path && (
        <img
          src="https://i.ibb.co/4ThsTsv/poster-coming-soon.jpg"
          alt="Movie poster"
        />
      )}

      <h1>{title}</h1>
      <Toaster />
    </>
  );
};
