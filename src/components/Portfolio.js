import React from 'react';
import netflix from "../images/runisfun.JPG";
import cityGuide from "../images/BrainFlix.JPG";
import portfolio from "../images/portfolio5.JPG";
import taskManager from "../images/task-manager.png";
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"; 



const Portfolio = () => {
  
//Runisfun
const openPopupboxRunisfun =() => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={netflix} alt="RunIsFun Project..." />
      <p>Web Site that helps athletic consumers purchase their next pair of runners. The Site is using a client-server model (front-end & back-end) built with React and NodeJS. Existing filters assist consumers to sort runners by gender, brand, type of activity, model, colour, size and quantity to buy. The RunIsFun also familiarizes users with the model description and the availability of shoes in stock. </p>
      <b>Demo: </b><a className="hyper-link" onClick={()=> window.open("https://runisfun.herokuapp.com/", "_blank")}>https://runisfun.herokuapp.com/</a>
      <br />
      <b>GitHub: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/Reksakan/askerkan-runisfun")}>https://github.com/Reksakan/askerkan-runisfun</a>
    </>
  )
  PopupboxManager.open({ content })
}

const popupboxConfigRunisfun = {
  titleBar: {
    enable: true,
    text: "Runisfun project."
  },
  fadeIn: true,
  fadeInSpeed: 600
}

//Funvidrun
const openPopupboxFunvidrun =() => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={cityGuide} alt="FunVidRun Project..." />
      <p>A responsive full-stack web application that mimics YouTube. I created this site as one of my projects as a student in BrainStation program. The home page features a large full-width video player, information about the video including the uploader’s name, views and likes counts, and a written description. It also features a comment section, where users can submit comments about the video. </p>
      <b>Demo: </b><a className="hyper-link" onClick={()=> window.open("https://funvidrun.herokuapp.com/", "_blank")}>https://funvidrun.herokuapp.com/</a>
      <br />
      <b>GitHub: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/Reksakan/asker-alshanbayev-brainflix")}>https://github.com/Reksakan/asker-alshanbayev-brainflix</a>
    </>
  )
  PopupboxManager.open({ content })
}

const popupboxConfigFunvidrun = {
  titleBar: {
    enable: true,
    text: "FunVidRun project."
  },
  fadeIn: true,
  fadeInSpeed: 600
}

//Portfolio Project
const openPopupboxPortfolio =() => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate molestias modi id, maiores voluptas at labore quis officiis laboriosam tempore quia et harum est odio, iste eveniet? Perspiciatis, optio?</p>
      <b>GitHub: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/Reksakan/reksa-portfolio")}>https://github.com/Reksakan/reksa-portfolio</a>
    </>
  )
  PopupboxManager.open({ content })
}

const popupboxConfigPortfolio = {
  titleBar: {
    enable: true,
    text: "Portfolio React project."
  },
  fadeIn: true,
  fadeInSpeed: 600
}

//Task Manager using React and Redux Project
// const openPopupboxTaskManager =() => {
//   const content = (
//     <>
//       <img className="portfolio-image-popupbox" src={taskManager} alt="TaskManager Project..." />
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate molestias modi id, maiores voluptas at labore quis officiis laboriosam tempore quia et harum est odio, iste eveniet? Perspiciatis, optio?</p>
//       <b>GitHub: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/Reksakan/reksa-portfolio")}>https://github.com/Reksakan/reksa-portfolio</a>
//     </>
//   )
//   PopupboxManager.open({ content })
// }

const popupboxConfigTaskManager = {
  titleBar: {
    enable: true,
    text: "Task Manager project."
  },
  fadeIn: true,
  fadeInSpeed: 600
}

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper justify-content-center">  
          <div className="portfolio-image-box" onClick={openPopupboxRunisfun}>
            <img className="portfolio-image" src={netflix} alt="RunIsFun Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFunvidrun}>
            <img className="portfolio-image" src={cityGuide} alt="FunVidRun Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          {/* <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
        </div>          
      </div>
      <PopupboxContainer {...popupboxConfigRunisfun} />
      <PopupboxContainer {...popupboxConfigFunvidrun} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
    </div>
  )
}

export default Portfolio;