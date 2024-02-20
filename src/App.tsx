import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css'; // Assuming you have some basic styles

const Home = () => <div>Home Section</div>;
const About = () => <div>About Section</div>;
const Contact = () => <div>Contact Section</div>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="Sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
