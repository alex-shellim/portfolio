import React from 'react';
// import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome.js';
import About from './About.js';
import Work from './Work.js';
import SainsburysBookASlot from './Sainsburys-book-a-slot.js';
import './styling/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="navigation">
          {/*<Link to="/"><img src={logo} className="logo"/></Link>*/}
          <Link to="/" className="home-link">Alex Shellim</Link>
          <div className="navigation-links">
            <Link to="/Work" className="page-link">Work</Link>
            <Link to="/About" className="page-link">About</Link>
          </div>
      </div>

      <div className="page-content">
        {/* Set up the Router*/}
       <Route exact path="/" component={Welcome} />
       <Route path="/About" component={About} />
       <Route path="/Work" component={Work} />
      </div>

      <div className="page-content--project">
        {/* Set up the Router*/}
       <Route path="/Sainsburys-book-a-slot" component={SainsburysBookASlot} />
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
