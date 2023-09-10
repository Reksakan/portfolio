import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel 
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={3000}>
      <>
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis minima optio, voluptate impedit explicabo dolorem? Libero enim velit quisquam.</p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Pack 2" />
        <div className="myCarousel">
          <h3>Jane Pack 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis minima optio, voluptate impedit explicabo dolorem? Libero enim velit quisquam.</p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Asker Kan 3" />
        <div className="myCarousel">
          <h3>Asker Kan 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis minima optio, voluptate impedit explicabo dolorem? Libero enim velit quisquam.</p>
        </div>
      </>
      <>
        <img src={avatar4} alt="Kriss Matt 4" />
        <div className="myCarousel">
          <h3>Kriss Matt 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis minima optio, voluptate impedit explicabo dolorem? Libero enim velit quisquam.</p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel
