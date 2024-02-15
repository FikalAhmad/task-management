import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotesList from "./pages/Notes";
import Pomodoro from "./pages/Pomodoro";
import Todo from "./pages/Todo";
import AddNote from "./pages/Notes/AddNote";
import ViewNote from "./pages/Notes/ViewNote";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Dashboard page={<NotesList />} />} />
        <Route
          path="/notes/:noteId"
          element={<Dashboard page={<NotesList />} />}
        />
        <Route
          path="/notes/addnote"
          element={<Dashboard page={<AddNote />} />}
        />
        <Route path="/pomodoro" element={<Dashboard page={<Pomodoro />} />} />
        <Route path="/todo" element={<Dashboard page={<Todo />} />} />
      </Routes>
    </Router>
  );
};

export default App;
