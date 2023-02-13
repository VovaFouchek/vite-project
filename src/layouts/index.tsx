import { NavLink, Outlet } from 'react-router-dom';

// Constance
import ROUTERS from '../constants/routers';

const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={ROUTERS.HOME}>Home</NavLink>
          <NavLink to={ROUTERS.ABOUT}>About</NavLink>
          <NavLink to={ROUTERS.SIGN_UP}>Register</NavLink>
          <NavLink to={ROUTERS.SIGN_IN}>Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
