import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieDetails } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import {
  Container,
  MovieInfo,
  MoviePoster,
  Information,
  InformationList,
} from './MovieDetailsStyles';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const params = useParams();
  const { id } = params;
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getMovie() {
      try {
        setIsLoading(true);

        const results = await fetchMovieDetails(id);

        setMovieDetails(results);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [id]);
  const { title, poster_path, vote_average, overview, genres } = movieDetails;
  const percent = (vote_average * 100) / 10;
  return (
    <>
      <Button backLinkHref={backLinkHref} />
      <Container>
        <div>
          {isLoading && <Loader />}
          {poster_path && (
            <MoviePoster
              src={`${BASE_IMG_URL}${poster_path}`}
              alt="Movie poster"
            />
          )}
          {!poster_path && !isLoading && (
            <MoviePoster
              src="https://i.ibb.co/4ThsTsv/poster-coming-soon.jpg"
              alt="Movie poster"
            />
          )}
        </div>
        <MovieInfo>
          <h1>{title}</h1>
          <p>User score: {percent.toFixed()}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
        </MovieInfo>
        <Toaster />
      </Container>
      <h3>Additional information</h3>
      <Information>
        <InformationList>
          <li>
            <Link to={'cast'} state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </InformationList>
      </Information>

      <Outlet />
    </>
  );
};

export default MovieDetails;
