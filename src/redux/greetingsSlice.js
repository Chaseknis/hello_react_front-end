import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: '',
  status: 'idle',
  error: null,
};

export const fetchGreetings = createAsyncThunk('messages/fetchGreetings', async () => {
  const res = await fetch('http://localhost:3000/api/random_greeting');
  const data = res.json();
  return data;
});

const greetingsSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchGreetings.fulfilled, (state, { payload }) => ({
        ...state,
        messages: payload.greeting,
        status: 'successful',
      }))
      .addCase(fetchGreetings.rejected, (state, { error }) => ({
        ...state,
        status: 'failed',
        error: error.message,
      }));
  },
});

export default greetingsSlice.reducer;
