import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotesList from "./pages/Notes";
import Pomodoro from "./pages/Pomodoro";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Dashboard page={<NotesList />} />} />
        <Route path="/pomodoro" element={<Dashboard page={<Pomodoro />} />} />
      </Routes>
    </Router>
  );
};

export default App;
