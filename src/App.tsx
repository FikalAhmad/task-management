import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotesList from "./pages/Notes";
import Pomodoro from "./pages/Pomodoro";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Dashboard page={<NotesList />} />} />
        <Route path="/pomodoro" element={<Dashboard page={<Pomodoro />} />} />
        <Route path="/todo" element={<Dashboard page={<Todo />} />} />
      </Routes>
    </Router>
  );
};

export default App;
