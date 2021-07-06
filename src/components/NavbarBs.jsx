
import React    from 'react';
import { Navbar , Nav ,  Form , FormControl , Button }  from 'react-bootstrap';
import '../App.css';

function NavbarBs() {
  
    return (

    <>

    <Navbar variant="dark" expand="lg">
    
        <Navbar.Brand href="/">FED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/Consultations">Consultations</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    
    </Navbar>

    </>
    )
}
export default NavbarBs;
