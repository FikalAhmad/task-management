import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TodoState {
  id: string;
  task: string;
  done: boolean;
}

const initialState: TodoState[] = [];

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, task, done } = action.payload;
      const existingNote = state.find((todo) => todo.id === id);
      if (existingNote) {
        existingNote.task = task;
        existingNote.done = done;
      }
    },
    removeTodo: (state, action: PayloadAction<string[]>) => {
      const ids = action.payload;
      return state.filter((note) => !ids.includes(note.id));
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
