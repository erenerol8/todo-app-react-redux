import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch("http://localhost:7000/todos");
    return await res.json();
  }
);

export const addTodoAsync = createAsyncThunk(
  "todo/addTodoAsync",
  async (data) => {
    const res = await axios("http://localhost:7000/todos", data);
    return res.data;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;

      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
  extraReducers: {
    //for get data
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //add todo
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { toggle, destroy } = todosSlice.actions;
export default todosSlice.reducer;
