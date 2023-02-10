import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </>
  );
};

export default Login;
