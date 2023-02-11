import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Constance
import ROUTERS from './constants/routers';

// Pages
import Register from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

import RootLayout from './layouts';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={ROUTERS.HOME}
        element={<RootLayout />}
        errorElement={<NotFound />}
      >
        <Route index element={<Home />} />
        <Route path={ROUTERS.SIGN_IN} element={<Login />} />
        <Route path={ROUTERS.SIGN_UP} element={<Register />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
