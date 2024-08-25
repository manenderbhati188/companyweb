import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact'
import About from '../src/pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

    </div>
  );
}

export default App;
