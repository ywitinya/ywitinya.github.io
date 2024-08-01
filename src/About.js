import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import CarouselObject from './components/carousels';
import Footer from './components/footer';
import BasicExample from './components/navbar';

function AboutPage() {
    return(
        <>
        <Container style={{alignContent:'flex-start'}}>
            <BasicExample/>
        </Container>
      
        <h3 class="display-5" style={{fontFamily:'Verdana'}}>About Me</h3>
        <div className="d-flex flex-row" style={{fontSize:'large', fontFamily:'sans-serif'}} >
            <p className="p-3">
                Beyond coding and algorithms, I'm passionate about soccer. 
                I'm both a player and an avid fan of the English Premier League and Tottenham Hotspurs. 
                Watching a thrilling match on the weekend helps me unwind and fuels my competitive spirit.
            </p>
            <p className="p-3">
                Family is essential to me, and as the first-born of five siblings, 
                I've naturally embraced responsibility and leadership. 
                I love my family and have always worked hard, embracing challenges 
                because I have had their unwavering support since birth. 
                My parents gave me the best gift of my life: 
                my family name, Witinya, which means "don't be afraid."
            </p>
            <p className="p-3">
                My exceptional communication skills set me apart. 
                As a Colgate Admission Ambassador, computer science tutor, 
                and community leader, I love connecting with people and guiding them through 
                the exciting journey of higher education.
            </p>
            <p className="p-3">
                In the tech world, I'm versatile. I can code in Java, Python, C, R, 
                JavaScript, HTML, and CSS. I'm also proficient with tools like Excel, Adobe InDesign, 
                Illustrator, Photoshop, Figma, VS Code, and GitHub, where I excel in data analysis and design. Technology isn't just my major; it's a passion I'm eager to apply and share with others.
            </p>
        </div>
        <CarouselObject/>
        <Footer/>
        </>
    );
}

export default AboutPage;