import React from "react";
import divLeft from '../../images/divider-left.png';
import divRight from '../../images/divider-right.png';
import BubbleUI from 'react-bubble-ui';
import ChildComponent from "./childComp";
import "react-bubble-ui/dist/index.css";

export const skills = [
    {
        name: "CI/CD",
        color: "#98e3c0"
    },
    {
        name: "C++",
        color: "#9d98e3"
    },
    {
        name: "HTML",
        color: "#98bbe3"
    },
    {
        name: "React",
        color: "#e398de"
    },
    {
        name: "CSS",
        color: "#fff"
    },
    {
        name: "JQuery",
        color: "#e3989c"
    },
    {
        name: "Python",
        color: "#637a78"
    },
    {
        name: "SpringBoot",
        color: "#c6e398"
    },
    {
        name: "R",
        color: "#e3c798"
    },
    {
        name: "JAVA",
        color: "#d9e398"
    },
    {
        name: "JS",
        color: "#e3ac98"
    }
  ];

const Skill = () => {
    const children = skills.map((data, i) => {
        return (
          <div
            className="child"
            style={{backgroundColor: `${data.color}`, fontWeight: "bold"}}
            key={i}
          >
            {data.name}
          </div>
        );
      });
      const options = {
		size: 150,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols: 6,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}
    return (
        <div id = "skill" style={{height: "800px", marginTop: "20px"}}>
            <img src={divLeft} className="dividerL" style={{marginLeft: "50px", position: "absolute"}}/>
            <img src={divRight} className="dividerR" style={{marginLeft: "65%", position: "absolute"}}/>
            <span className="topic" style={{fontWeight: "500", fontSize: "60px", marginLeft: "620px"}}> SKILLS </span>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        <BubbleUI options={options} className="myBubbleUI">
            {children}
        </BubbleUI>
        </div>
        
    )
}

export default Skill;