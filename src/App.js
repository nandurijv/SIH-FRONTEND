import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import {useState} from 'react';
function App() {
  const [showLoginForm,setShowLoginForm] = useState(false);
  const [showRegForm,setShowRegForm] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar showLoginForm={showLoginForm} setShowRegForm={setShowRegForm} setShowLoginForm={setShowLoginForm} showRegForm={showRegForm} m={0} />
          <Routes>

            <Route path="/" element={<Home showLoginForm={showLoginForm} setShowRegForm={setShowRegForm} setShowLoginForm={setShowLoginForm} showRegForm={showRegForm}/>} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
