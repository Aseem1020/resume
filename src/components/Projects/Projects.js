import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import header from "../../Assets/Projects/header.jpg";
import sliders from "../../Assets/Projects/slider.png";
import animation from "../../Assets/Projects/animation.jpeg";
import form from "../../Assets/Projects/form.jpeg";
import biodata from "../../Assets/Projects/biodata.jpeg";
import website from "../../Assets/Projects/website.jpeg";
import art from "../../Assets/Projects/art.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few tasks and projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="Registration Form"
              ghLink="https://aseem1020.github.io/form/form%202.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Website Format"
              ghLink="https://aseem1020.github.io/practic.html/tasktoday.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="Animation"
              ghLink="https://aseem1020.github.io/uyiuhoip/animation.html"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={header}
              isBlog={false}
              title="Header and Subheader"
              ghLink="https://bhavisha262.github.io/architecture/Website1.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biodata}
              isBlog={false}
              title="Biodata With Picture Changing"
              ghLink="https://aseem1020.github.io/biodata/bio.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sliders}
              isBlog={false}
              title="Sliders using JS"
              ghLink="https://aseem1020.github.io/aa/slider1.html"s
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="Art Website Using HTML,CSS and JS"
              ghLink="https://bhavisha262.github.io/Art-Website/Art%20Gallery.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
