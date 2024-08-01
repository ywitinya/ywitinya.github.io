import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import BasicExample from './components/navbar';


function ContactPage() {
    return(
        <>
            <Container style={{alignContent:'flex-start'}}>
                <BasicExample/>
            </Container>
      
            <h1 className="display-5" style={{fontFamily:'Verdana'}}>Contact</h1>
            <div className="d-flex flex-row">
                <h3 className="justify-content-start" style={{color:'blue'}}>#MyResume</h3>
                <a href="YabesiWitinyaResume.pdf" target="_blank" class="justify-content-end"><i className="display-5 bi-filetype-pdf"></i></a>
            </div>
            
            <h3> Let's connect and explore opportunities together!</h3>
            <p>Thank you for taking the time to explore my portfolio. 
                I'm eager to connect with professionals, recruiters, and potential collaborators in the tech and related fields. 
                Feel free to reach out to me with any opportunities, questions, or just to say hello.</p>
            <div style={{padding:'0.25in'}}>   
                <ul class="text-center list-group list-group-flush shadow-lg rounded bg-body" 
                style={{paddingRight:'0.5in', paddingLeft:'0.5in'}}>
                    <li class="list-group-item">Email:<br></br>
                        <a href="mailto:ywitinya@colgate.edu">ywitinya@colgate.edu</a></li>
                    <li class="list-group-item">LinkedIn:<br></br>
                        <a href="https://www.linkedin.com/in/yabesi-witinya-7396b4259/" target="_blank">Yabesi Witinya</a></li>
                    <li class="list-group-item">GitHub:<br></br>
                        <a href="https://github.com/ywitinya" target="_blank">ywitinya</a></li>
                    <li class="list-group-item"><br></br>Phone:315-790-4847</li>
                </ul>
                {/* <!-- <div class="chart">Let's Chart</div> --> */}
            </div> 
            <Footer/>
        </>
    );
}

export default ContactPage;