// import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './SearchBarStyles';

export const SearchBar = () => {
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const searchQuery = e.target.elements.query.value;
  //     onSubmit({ searchQuery });
  //     e.target.reset();
  //   };

  return (
    <SearchbarHeader>
      <SearchForm>
        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchFormButton>
          <FiSearch />
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>
      </SearchForm>
    </SearchbarHeader>
  );
};

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
