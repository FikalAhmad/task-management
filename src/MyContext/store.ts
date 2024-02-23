import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./NoteSlice";
import TodoSlice from "./TodoSlice";

export const store = configureStore({
  reducer: {
    notes: NoteSlice,
    todos: TodoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
