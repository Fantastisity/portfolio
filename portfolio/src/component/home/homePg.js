import React from "react";
import Typewriter from 'typewriter-effect';
import "./homePg.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import leetcode from '../../images/leetcode.svg';
import { Avatar } from "@material-ui/core";


const Home = () => {
    return (
        <div id = "about" style={{height: "500px", marginTop: "230px", marginLeft: "15px"}}>
            <Typewriter
                options={{
                    strings: ["Hey", "I'm Siyu", "I love coding!"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'type-wrapper',
                    cursorClassName: 'type-cursor'
                }}
            />
            <br/>
            <div>
                <Avatar variant="circular" style={{background: "linear-gradient(60deg, #bcd5e6, #a1d2d4)", marginLeft: "43%", marginTop: "25px"}}>
                <a 
                href = "https://www.linkedin.com/in/siyu-jack-you-120658170/" 
                target="_blank"><LinkedInIcon/></a>
                </Avatar>
                <Avatar variant="circular" style={{background: "linear-gradient(60deg, #bcd5e6, #a1d2d4)", marginLeft: "54%", marginTop: "-40px"}}>
                <a 
                href = "https://leetcode.com/fantastisity/" 
                target="_blank"><img src={leetcode} alt="ltcd" style={{width: "22px"}}/></a>
                </Avatar>
            </div>
        </div>
    )
}

export default Home;