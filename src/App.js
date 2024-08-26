import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/Homepage'
import Contact from './pages/Contact/Contact'
import About from '../src/pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services/Service';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='/Services' element={<Services/>}/>
        </Routes>

    </div>
  );
}

export default App;
