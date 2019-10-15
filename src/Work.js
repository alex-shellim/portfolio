import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

function Work(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Work</h1>
      <div class="thumbnail-gallery">
        <Thumbnail
          link="/Songkick"
          image="https://images.sk-static.com/images/media/profile_images/artists/3277856/huge_avatar"
          title="Songkick"
          category="Web Design"
        />
        <Thumbnail
          link="/Songkick"
          image="https://images.sk-static.com/images/media/profile_images/artists/3277856/huge_avatar"
          title="Songkick"
          category="Web Design"
        />
        <Thumbnail
          link="/Songkick"
          image="https://images.sk-static.com/images/media/profile_images/artists/3277856/huge_avatar"
          title="Songkick"
          category="Web Design"
        />
      </div>
    </div>
  )
}

export default Work;
