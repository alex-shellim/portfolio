import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="project-title"><span>{props.title}</span></div>
        <div className="project-category"><span>{props.category}</span></div>
      </Link>
    </div>
  )
}

export default Thumbnail;
