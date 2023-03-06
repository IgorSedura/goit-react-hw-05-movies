import { Link } from 'react-router-dom';
import { NotFoundButton } from './NotFoundStyles';

const NotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, we couldn't find that page :(</p>
      <Link to="/">
        {' '}
        <NotFoundButton> Go to homepage</NotFoundButton>
      </Link>
    </main>
  );
};

export default NotFound;
