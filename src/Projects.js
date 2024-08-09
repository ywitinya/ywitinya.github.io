import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import galaxyshooter from './components/assets/galaxyshooter.jpg';
import studysparx from './components/assets/studysparx.jpg';
import unojournal from './components/assets/unojournal.jpg';

const ProjectItem = ({ title, description, link, img }) => {
    return (
        
        <Card style={{ width: '18rem' }} className='shadow-lg'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary"><a href={link} style={{color:'white'}}>View Project</a></Button>
          </Card.Body>
        </Card>
        
    );
  };
  
function Projects() {
    return(
        <>
           
            <h3 class="display-5" style={{fontFamily:'Verdana'}}>Projects</h3>
            <Container>
      <Row className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <div className="p-3 text-white">
          <ProjectItem title="Galaxy space shooter" img={galaxyshooter}
            link="https://github.com/ywitinya/Creative-game-Java-" description="Designed and implemented 
            interactive gameplay, including player controls and enemy behavior."/>
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <div className="p-3 text-white">
          <ProjectItem title="Study-Spakx" img={studysparx}
            link="https://devpost.com/software/studysparx" description="Personalized studying platform 
            designed for both short-term and long-term goals"/>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="p-3 text-white">
          <ProjectItem title="Personal Journal" img={unojournal}
            link="#" description="This is My daily dairy that record 
            only one word description of a special something on a day"/>
          </div>
        </Col>
      </Row>
    </Container>
    </>        
    );
}

export default Projects;