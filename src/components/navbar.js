import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="primary" 
    style={{color:"maroon", fontSize:"x-large", marginTop:"0.25in"}}>
      
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href = '/'>Home</Nav.Link>
            <Nav.Link href='/Contact'>Contact</Nav.Link>
            <Nav.Link href='/About'> About</Nav.Link>
            <Nav.Link href='/Projects'>Projects</Nav.Link>
            <NavDropdown title="Theme" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Light Theme</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dark Theme</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Container>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default BasicExample;