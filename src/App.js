import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Certifications from './Certifications';
import Skills from './Skills';
import Resume from './Resume';
import Projects from './Projects';
import Internship from './Internship';
import Footer from './Footer';
import Loading from './Loading'; // Import the Loading component
import CustomCursor from './CustomCursor';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            <CustomCursor />
            <header>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/certifications">Certifications</Link></li>
                  <li><Link to="/skills">Skills</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/internship">Internship</Link></li>
                  <li><Link to="/resume">Resume</Link></li>
                </ul>
              </nav>
            </header>

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/internship" element={<Internship />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
