import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingsSlice';

const Greetings = () => {
  const { greetings, status } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>My greetings</h1>
      {greetings ? (<h2>{greetings.message}</h2>) : status}
    </div>
  );
};

export default Greetings;
