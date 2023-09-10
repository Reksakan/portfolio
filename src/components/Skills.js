import React from "react";
import DevIcon, { iconList } from "devicon-react-svg";

console.log(`Here is a list of icon names used by this component: ${iconList}`)

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">skills</h1>
        <ul className="icon-box-wrapper">
          <li className="icon-box">
            <DevIcon fill="#e6ba" icon="react"/>
            <p>React</p>
          </li>
          <li className="icon-box">
            <DevIcon fill="#e64e" icon="javascript"/>
            <p>Javascript</p>
          </li>
          <li className="icon-box">
            <DevIcon fill="#e64e" icon="typescript_badge"/>
            <p>TypeScript</p>
          </li>
          <li className="icon-box">
            <DevIcon fill="#e64b" icon="sass"/>
            <p>SASS</p>
          </li>
          <li className="icon-box">
            <DevIcon fill="#e649" icon="css3"/>
            <p>CSS3</p>
          </li>
          <li className="icon-box">
            <DevIcon fill="#e604" icon="mysql"/>
            <p>MySQL</p>
          </li>
          <li className="icon-box">
            <DevIcon fill="#e647" icon="bootstrap"/>
            <p>bootstrap</p>
          </li>
          <li className="icon-box">
            <DevIcon fill="#e602" icon="git"/>
            <p>Git</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills;
