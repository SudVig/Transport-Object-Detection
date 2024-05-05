
import './App.css';
import Navbar from './components/widgets/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
