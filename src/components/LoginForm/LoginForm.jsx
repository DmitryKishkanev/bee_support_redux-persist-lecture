import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/user/slice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginValue, setLoginValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(loginValue));
    setLoginValue('');
    navigate('/dashboard', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={loginValue}
        onChange={e => setLoginValue(e.target.value)}
      />
      <br />
      <button type="submit" disabled={!loginValue.trim()}>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
