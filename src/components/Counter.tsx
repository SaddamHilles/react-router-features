import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment } from '../features/counterSlice';

function Counter() {
  const count = useAppSelector(state => state.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  );
}

export default Counter;
