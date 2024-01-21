import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { opti } from "../assets/img/gears.png";

export const Projects = () => {

  const projects = [
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Features</h2>

                <h3>Optimization</h3>
                <p1>With fast and customizable settings specific to your server, Elixyum gives you a musical pleasure to the fullest.</p1>
                <p></p>
                <h3>Security</h3>
                <p1>An open source safe bot that you can browse and help us develop.</p1>
                <p></p>
                <h3>Universal</h3>
                <p1>A bot that supports multi-platform music playback. (Spotify, Souncloud, YouTube) | (It is a bot that complies with all copyrights and licenses.)</p1>
                <p></p>
                <h3>Support</h3>
                <p1>With our best teammates, we provide the fastest response to anyone who needs help</p1>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
          
       
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
