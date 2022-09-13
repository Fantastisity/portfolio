import React from "react";
import divLeft from '../../images/divider-left.png';
import divRight from '../../images/divider-right.png';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import ieapp from "../../images/ieapp.png";
import ml from "../../images/ml.jpg";

const projects = [
    {
        name: "Victoria International Student Help",
        description: `Aiming to assist international high school students adjusting to Victoria;
        front-end: React, HTML and CSS; back-end: NodeJS and MySQL`,
        src: "https://github.com/Fantastisity/ie-app",
        img: ieapp
    },
    {
        name: "Machine-Learning",
        description: `A lightweight machine learning library coded in C++ using template 
        meta-programming and multithreading; leveraged caching for matrix tranpose`,
        src: "https://github.com/Fantastisity/Machine-Learning",
        img:  ml
    },
]

const Project = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div id = "project" style={{height: "800px", marginTop: "25px"}}>
            <img src={divLeft} className="dividerL" style={{marginLeft: "50px", position: "absolute"}}/>
            <img src={divRight} className="dividerR" style={{marginLeft: "65%", position: "absolute"}}/>
            <span className="topic"
            style={{fontWeight: "500", fontSize: "60px", marginLeft: "580px"}}> PROJECTS </span>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={{display: "grid", margin: "10px 17%",
            width: "900px",height: "800px", gap: "2em", gridTemplateColumns: "490px 1fr 1fr 1fr"}}>
                {projects.map((proj, ind) => (
                    <Card
                    key={ind}
                    className= "card"
                    style={{width: "450px", height: "270px", padding: "1px"}}
                    onClick={() => openInNewTab(proj.src)}
                  >
                    <CardMedia
                        component="img"
                        height="140"
                        image={proj.img}
                        alt="green iguana"
                    />
                    <CardContent style={{background: "linear-gradient(0.3turn, #b2a7d6, #97c7c5, #97c7b2)"}}>
                        <Typography variant="h5" style={{fontWeight: "bold"}}>
                            {proj.name}
                        </Typography>
                        <Typography variant="body1">
                            {proj.description}
                        </Typography>
                        <br/>
                        
                    </CardContent>
                  </Card>
                ))}
            </div>
            <Button variant="contained" startIcon={<GitHubIcon/>} 
            onClick = {() => openInNewTab("https://github.com/Fantastisity")}
            style={{marginTop: "-60%", marginLeft: "660px", background: "linear-gradient(60deg, #bcd5e6, #a1d2d4)"}}>See More</Button>
        </div>
    )
}

export default Project;