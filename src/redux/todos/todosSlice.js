import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn react",
        completed: false,
      },
      {
        id: "2",
        title: "hello world",
        completed: true,
      },
    ],
  },
  reducers: {
    addTodo: (state, actions) => {
      state.items.push(actions.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
