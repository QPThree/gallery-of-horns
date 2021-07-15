import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';

class NavigationBar extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand = "lg">
        <Container>
          <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavDropdown title="Contact Me" id="basic-nav-dropdown">
          <NavDropdown.Item href="https://github.com/QPThree">GitHub</NavDropdown.Item>
          <NavDropdown.Item href="https://www.linkedin.com/in/quentin-young-iii/">LinkedIn</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
        </NavDropdown>
        </Container>
      </Navbar>
    )
  }
}
export default NavigationBar

