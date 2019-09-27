import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './About.js';
import Work from './Work.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="navigation-links">
            <Link to="/About" className="page-link">About</Link>
            <Link to="/Work" className="page-link">Work</Link>
          </div>
      </div>

      <div className="page-content">
        {/* Set up the Router*/}
       <Route path="/About" component={About} />
       <Route path="/Work" component={Work} />
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
