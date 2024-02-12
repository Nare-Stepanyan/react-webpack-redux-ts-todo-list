import { createSlice } from "@reduxjs/toolkit";
import { todo } from "../types";

type AppState = {
  todos: todo[];
};

const initialState: AppState = {
  todos: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = appSlice.actions;
export default appSlice.reducer;
