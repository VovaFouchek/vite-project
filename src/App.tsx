import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Constance
import ROUTERS from './constants/routers';
// Pages
import RootLayout from './layouts';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/SignUp';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

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
