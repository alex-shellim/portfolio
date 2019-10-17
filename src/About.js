import React from "react"
import meImage from './images/me.png';

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <div class="about-me">
        <div class="about-text">
        <p>I'm Alex. I'm a London-based (product) designer. I'm passionate about delivering intuitive, accessible products that solve problems and deliver value through research, insight and visual design.</p>
        <p>I currently work as part of Sainsbury's Experience Design team on their Groceries Online product. Previously I spent time launching an insurance product at a start-up called <a href="https://gobuzzvault.com/" target="_blank">Buzz</a> and at <a href="https://www.songkick.com/" target="_blank">Songkick</a> where I designed and developed campaigns to serve the biggest fans of some of the world's biggest artists.</p>
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
