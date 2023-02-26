import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Container } from './AppStyled';
import { NavBar } from './NavBar/Navbar';

export const App = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
