import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

function Work(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Work</h1>
      <Thumbnail
        link="/Songkick"
        image="https://images.sk-static.com/images/media/profile_images/artists/3277856/huge_avatar"
        title="Songkick"
        category="Web Design"
      />
      <Thumbnail
        link="/Sainsburys"
        image="https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/4047/ef55c0c8a64cfb43f4d5/letterbox_Sainsburys_MacBrocolli3.jpg"
        title="Sainsbury's Groceries Online"
        category="Product Design"
      />
    </div>
  )
}

export default Work;
