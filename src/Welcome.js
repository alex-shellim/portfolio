import React from 'react';
import {Link} from 'react-router-dom';
import './styling/App.css';

function Welcome(props) {
  return (
    <div className="Welcome">

      <h1>I'm a digital Product Designer. Find out more <Link to="/About" className="body-link">about me</Link> or take a look at <Link to="/Work" className="body-link">my work</Link>.</h1>

    </div>
  )
}

export default Welcome;
