import { increment, decrement, incrementByAmount } from 'store/counterSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const TestPage = () => {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const addOne = () => dispatch(increment());
  const deductOne = () => dispatch(decrement());
  const addNumber = (number: number) =>
    dispatch(incrementByAmount({ value: number }));

  return (
    <>
      <p>{counter.value}</p>
      <button onClick={addOne}>Add</button>
      <button onClick={deductOne}>Deduct</button>
      <button onClick={() => addNumber(2)}>Increase</button>
    </>
  );
};
