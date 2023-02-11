import { Link } from 'react-router-dom';
// Constance
import ROUTERS from '../../../constants/routers';

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <p>
        Or <Link to={ROUTERS.SIGN_UP}>Register</Link>
      </p>
    </>
  );
};

export default Login;
