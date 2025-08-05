import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import type { RootState } from './redux/store';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {

  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state: RootState) => state.counter);


  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };


  return (
    <>
      <h1 className="text-3xl font-bold text-indigo-500 text-center my-7">
        Basic Redux Tutorials
      </h1>

      <div className="max-w-xl mx-auto my-32">
        <h1 className='text-3xl font-bold'>Counter with Redux</h1>

        <button 
        onClick={() => handleIncrement(5)}
        className="text-xl font-medium bg-green-600 p-2 rounded-md my-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-indigo-500">
          Increment 5
        </button>
        <div>{count}</div>
        <button 
        onClick={handleDecrement}
        className="text-xl font-medium bg-red-600 p-2 rounded-md my-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-indigo-500">
          Decrement
        </button>
      </div>
    </>
  )
}

export default App;
