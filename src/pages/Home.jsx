import { useEffect } from 'react';
import { getTrendingMovies } from 'Api';
// import toast, { Toaster } from 'react-hot-toast';

export const Home = () => {
  //   const [movie, setMovie] = useState([]);
  //   const [isLoding, setIsLoading] = useState(false);
  useEffect(() => {
    getTrendingMovies().then(console.log);
  }, []);

  //   useEffect(() => {
  //     async function getMovie() {
  //       try {
  //         setIsLoading(true);

  //         const { resulte } = await getTrendingMovies();
  //         setMovie(resulte);
  //       } catch (error) {
  //         toast.error('Oops! Something went wrong! Please try again.');
  //       }
  //     }
  //   }, []);

  return;
};
