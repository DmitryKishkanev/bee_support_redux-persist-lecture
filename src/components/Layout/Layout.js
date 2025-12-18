import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/store';

const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);

  return (
    <div>
      <button onClick={() => dispatch(increment(100))}>increment</button>
      {value}
      <button onClick={() => dispatch(decrement(100))}>decrement</button>
    </div>
  );
};

export default Layout;
