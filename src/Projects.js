import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import galaxyshooter from './components/assets/galaxyshooter.jpg';
import studysparx from './components/assets/studysparx.jpg';
import unojournal from './components/assets/unojournal.jpg';
import BasicExample from './components/navbar';

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
            <Container style={{alignContent:'flex-start'}}>
                <BasicExample/>
            </Container>
            <h3 class="display-5" style={{fontFamily:'Verdana'}}>Projects</h3>
            <div className="d-flex justify-content-around" style={{marginTop:'0.5in', marginBottom:'0.5in'}}>
                <ProjectItem title="Galaxy space shooter" img={galaxyshooter}
                link="https://github.com/ywitinya/Creative-game-Java-" description="Designed and implemented 
                interactive gameplay, including player controls and enemy behavior."/>
                <ProjectItem title="Study-Spakx" img={studysparx}
                link="https://devpost.com/software/studysparx" description="Personalized studying platform 
                designed for both short-term and long-term goals"/>
                 <ProjectItem title="Personal Journal" img={unojournal}
                link="#" description="This is My daily dairy that record 
                only one word description of a special something on a day"/>
            </div>
           
        </>
    );
}

export default Projects;