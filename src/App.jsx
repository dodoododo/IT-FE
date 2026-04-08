import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Dangtintuyendung/Dangtintuyendung';
import Manhinhmatching from './pages/Manhinhmatching/Manhinhmatching';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matching" element={<Manhinhmatching />} />
      </Routes>
    </Router>
  );
}

export default App;