import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './AppStyled';

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const NavBar = lazy(() => import('./NavBar/Navbar'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const SearchBar = lazy(() => import('./SearchBar/SearchBar'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Suspense>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<SearchBar />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
