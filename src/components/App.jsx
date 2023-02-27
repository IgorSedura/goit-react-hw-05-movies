import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';

// import { NotFound } from 'pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Container } from './AppStyled';
import { NavBar } from './NavBar/Navbar';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<SearchBar />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
