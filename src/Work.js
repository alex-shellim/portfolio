import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import thumbSainsburysPdp from './images/work-thumbs/thumb-sainsburys-pdp.jpg';
import thumbSainsburysDelivery from './images/work-thumbs/thumb-sainsburys-delivery.jpg';
import thumbBuzzOnboarding from './images/work-thumbs/thumb-buzz-onboarding.jpg';
import './App.css';

function Work(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Work</h1>
      <div class="thumbnail-gallery">
        <Thumbnail
          link="/Sainsburys-pdp"
          image={thumbSainsburysPdp}
          title="Sainsbury's Product Detail Page"
          category="Web Design"
        />
        <Thumbnail
          link="/Sainsburys-book-a-slot"
          image={thumbSainsburysDelivery}
          title="Sainsbury's Book Delivery "
          category="Web Design"
        />
        <Thumbnail
          link="/Buzz-onboarding"
          image={thumbBuzzOnboarding}
          title="Buzz Insurance Onboarding"
          category="Web Design"
        />
        {/*// <Thumbnail
        //   link="/Songkick"
        //   image="https://images.sk-static.com/images/media/profile_images/artists/3277856/huge_avatar"
        //   title="Songkick"
        //   category="Web Design"
        // />*/}
      </div>
    </div>
  )
}

export default Work;
