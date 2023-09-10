import React from "react";
import author from "../me.jpg";

const AboutME = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-5 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>Hi! My name is AskeR. I'm Front-end Web Developer. Technologies I use are ReactJS, NodeJS, Express.</p>
          <p>After recognizing the positibe impact of a successfully integrated web app on a day-to-day business activities on my previous company, I decided to pivot my career into Web Development. I'm eager to leverage the coding skills I have gained at Brainstation with the problem solving and communication skills I have gained through my working experience to create new products and technologies.</p>
        </div>
      </div> 
    </div>
  )
}

export default AboutME
