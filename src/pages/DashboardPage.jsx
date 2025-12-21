import { useSelector, useDispatch } from 'react-redux';
import useLogOutRedirect from 'hooks/useLogOutRedirect';
import { update } from '../redux/value/slice';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(state => state.clicks.value);

  useLogOutRedirect();

  return (
    <div>
      <h1> Dashboard Page</h1>
      <p> Number of clicks: {numberOfClicks}</p>
      <button type="button" onClick={() => dispatch(update(5))}>
        Add 5 clicks
      </button>
      <button type="button" onClick={() => dispatch(update(10))}>
        Add 10 clicks
      </button>
      <button type="button" onClick={() => dispatch(update(20))}>
        Add 20 clicks
      </button>
    </div>
  );
};

export default DashboardPage;
