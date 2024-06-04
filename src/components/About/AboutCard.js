import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aseem Joshi </span>
            from <span className="purple"> Kantaphod, Dewas, Madhya Pradesh, India.</span>
            <br />
            I am currently employed as a fullstack developer at V-Ex Tech Solutions, Vadodara, Gujarat.
            <br />
            I have completed  MSc in Forensic Science at Parul University, Vadodara
  
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing web 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(167 177 558)" }}>
            "Out to create things that make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Aseem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
