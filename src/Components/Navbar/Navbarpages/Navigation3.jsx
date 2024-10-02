import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Features from '../Dropdownpages/Features';
import Plans from '../Dropdownpages/Plans';
import Accontants from '../Dropdownpages/Accountants';
import Apps from '../Dropdownpages/Apps';
import Support from '../Dropdownpages/Support';
import { Link } from "react-router-dom";


const Navigation3 = () => {
  return (
   <>
   {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
           
<Navbar.Brand>
<Link to="/">
    <img 
      src="https://monmatics.com/public/assets/images/Logo%20new%201.svg" 
      alt="Monmatics Logo" 
      className='md:w-40' 
    />
  </Link>
</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Link to="/">
    <img 
      src="https://monmatics.com/public/assets/images/Logo%20new%201.svg" 
      alt="Monmatics Logo" 
      className='md:w-40' 
    />
  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href=""> <Features/>  </Nav.Link>
                  <Nav.Link href=""> <Plans/>  </Nav.Link>
                  <Nav.Link href=""> <Accontants/>  </Nav.Link>
                  <Nav.Link href=""> <Apps/>  </Nav.Link>
                  <Nav.Link href=""> <Support/>  </Nav.Link>
                  
                
              
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
   </>
  )
}

export default Navigation3