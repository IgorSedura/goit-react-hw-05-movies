import { searchMovie } from 'Api';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './SearchBarStyles';

const SearchBar = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovie() {
      try {
        const { results } = await searchMovie(query);
        setMovies(results);
        results.length > 0
          ? setMovies(results)
          : toast.error(
              `Sorry! We couldn't find any movies matching your search query ${query}`
            );
      } catch (error) {}
    }

    getMovie();
  }, [query]);
  const handleSubmit = ({ query }) => {
    setSearchParams(query);
  };

  return (
    <>
      <SearchbarHeader>
        {/* {isLoading && <Loader />} */}
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            required
          />
          <SearchFormButton>
            <Toaster />
            <FiSearch />
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>
          {/* <Toaster /> */}
        </SearchForm>
      </SearchbarHeader>
      <MovieList movies={movies} />
    </>
  );
};

export default SearchBar;
