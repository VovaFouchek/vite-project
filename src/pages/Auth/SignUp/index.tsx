import { Link } from 'react-router-dom';
// Constance
import ROUTERS from '../../../constants/routers';

const SignUP = () => {
  return (
    <>
      <h1>Register</h1>
      <p>
        Already have an account? <Link to={ROUTERS.SIGN_IN}>Sing in</Link>
      </p>
    </>
  );
};

export default SignUP;
