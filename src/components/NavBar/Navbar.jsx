import { Header, Link } from './NavBarStyles';

const NavBar = () => {
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

export default NavBar;
