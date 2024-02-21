import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NoteState {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const initialState: NoteState[] = [];

export const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteState>) => {
      state.push(action.payload);
    },
    updateNote: (state, action) => {
      const { id, title, content, createdAt } = action.payload;
      const existingNote = state.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
        existingNote.createdAt = createdAt;
      }
    },
    removeNote: (state, action: PayloadAction<string[]>) => {
      const ids = action.payload;
      return state.filter((note) => !ids.includes(note.id));
    },
  },
});

export const { addNote, updateNote, removeNote } = NoteSlice.actions;

export default NoteSlice.reducer;
