import { Header, Link } from './NavBarStyles';

export const NavBar = () => {
  return (
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};
