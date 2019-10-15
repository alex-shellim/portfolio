import React from "react"

import meImage from './images/me.png';

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <div class="about-me">
        <div class="about-text">
        <p>I'm Alex. I'm a London-based (product) designer. I'm passionate about delivering intuitive, accessible products that solve problems and deliver value through research, insight and visual design.</p>
        <p>I currently work as part of Sainsbury's Experience Design team on their Groceries Online product. Previously I spent time at an insurtech start-up and at Songkick.com designing and developing campaigns for some of the world's biggest artists.</p>
        <p>I like noisy music and baking my own bread.</p>
        <p><a class="body-link" href="">Contact me on Linkedin</a></p>
        <p><a class="body-link" href="">Download my CV</a></p>
        </div>
        <div class="about-image">
          <img src={meImage} className="about-image"/>
        </div>
      </div>
    </div>
  )
}

export default About;
