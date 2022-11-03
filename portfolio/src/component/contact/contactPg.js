import React from "react";
import divLeft from '../../images/divider-left.png';
import divRight from '../../images/divider-right.png';
import emailjs from "emailjs-com";
import { useRef } from "react";
import './contactPg.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_2xj9sdb",
            "template_7ll0d7v",
            form.current,
            "L-tfX4ibYOfcsXfHr"
          )
          .then(
            (result) => {
              alert("Email sent");
            },
            (error) => {
              alert("Unable to send email:", error);
            }
          );
      };
    return (
        <div id = "contact" style={{height: "800px", marginTop: "25px"}}>
            <img src={divLeft} className="dividerL" style={{marginLeft: "50px", position: "absolute"}}/>
            <img src={divRight} className="dividerR" style={{marginLeft: "65%", position: "absolute"}}/>
            <span className="topic" style={{fontWeight: "500", fontSize: "60px", marginLeft: "592px"}}> CONNECT </span>
            <br/><br/><br/>
        <div className="col align-self-center">
          <div style={{width: "500px", height: "500px", marginLeft: "30%"}}>
          <form ref={form} onSubmit={sendEmail}>
            <div style={{display: "grid", margin: "10px -1%", width: "900px",height: "100px", gap: "2em", gridTemplateColumns: "289px 1fr 1fr 1fr"}}>
            <div className="form-group">
              <input
                type="name"
                name="name"
                style={{width: "303px", height: "36px", border:"2px solid #4280ad",
                boxShadow: "0 0 7px #719ECE", backgroundColor: "transparent", color: "#fff", fontSize: "17px"}}
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                style={{width: "303px", height: "36px", border:"2px solid #4280ad",
                boxShadow: "0 0 7px #719ECE", backgroundColor: "transparent", color: "#fff", fontSize: "17px"}}
                id="email"
                placeholder="Email"
              />
            </div>
            </div>

            <div style={{marginTop: "-30px", marginLeft: "-5px"}}>
              <input
                type="text"
                name="subject"
                style={{width: "626px", height: "36px", border:"2px solid #4280ad",
                boxShadow: "0 0 7px #719ECE", backgroundColor: "transparent", color: "#fff", fontSize: "17px"}}
                id="subject"
                placeholder="Subject"
              />
            </div>

            <div style={{marginLeft: "-7px", marginTop: "37px"}}>
              <textarea
                name="message"
                id="email_body"
                rows="5"
                cols="59"
                placeholder="Message"
                style={{border:"2px solid #4280ad", color: "#fff", fontSize: "17px",
                boxShadow: "0 0 7px #719ECE", backgroundColor: "transparent"}}
              ></textarea>
            </div>

            <button type="submit" className="contactBt" style={{backgroundColor: "transparent",border:"2px solid #4280ad",
                boxShadow: "0 0 7px #719ECE", backgroundColor: "transparent", color:"#8fb1eb", height: "40px",
                width: "90px", fontSize:"17px", marginLeft: "50%", marginTop: "20px"}}>
              Submit
            </button>
          </form>
          </div>
        </div>
        </div>
    )
}

export default Contact;
