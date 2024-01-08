import logo from './logo.svg';
import './App.css';

import Home from "../src/Pages/Home/home.jsx";
import About from "../src/Pages/About/about.jsx";
import Contact from "../src/Pages/Contact/contact.jsx";

import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fullPageWrapper">
          <div class="menuWrap">
              <nav>
                <ul>
                  <li><Link to="">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>            
                </ul>
              </nav> 
            </div>
            <div className="content">
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
