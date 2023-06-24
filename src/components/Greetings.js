import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingsSlice';

const Greetings = () => {
  const greetings = useSelector((store) => store.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>My greetings</h1>
      <h2>{greetings.messages}</h2>
    </div>
  );
};

export default Greetings;
