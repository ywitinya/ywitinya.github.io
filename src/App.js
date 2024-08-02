import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './About';
import BasicExample from './components/navbar';
import ContactPage from './Contact';
import Projects from './Projects';

function Home() {
  return(
      <>
      <Container style={{alignContent:'flex-start'}}>
            <BasicExample/>
      </Container>
      <div style={{margin:'0.25in'}}>
          <div class="p-3 float-start" style={{alignContent:'flex-start'}}>
            <img src="Yabz-copy.png" class="img-fluid rounded shadow-lg" 
              width="350" height="500" alt="No pic found"/>
          </div>
        <div className='text-center' style={{paddingTop:'0.25in'}}>
        <h1 className="display-2"><br></br>Hi, I'm Yabesi Witinya</h1>
        <h1 className="display-3">Aspiring Tech Enthusiast.</h1><br></br>
          <p>
            I'm a sophomore at Colgate University, currently majoring in computer science.<br></br>
            As a student, I'm still in the process of exploring the diverse landscape of computer science.<br></br>
            I haven't yet settled on a specific field, and that's what makes this journey so exciting.<br></br>
          </p>
        </div>
      </div>
      {/* <div style={{margin:'0.25in'}}>
        <Footer/>
      </div>
       */}
    </>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;


