import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <p>
        Already have an account? <Link to="/login">Sing in</Link>
      </p>
    </>
  );
};

export default Register;
