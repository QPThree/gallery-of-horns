import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class NavigationBar extends React.Component {
  handleShowContactModal = () => {
    this.props.handleShowContactModal();
  }
  handleCloseContactModal = () => {
    this.props.handleCloseContactModal();
  }
  render() {
    return (
      <Navbar bg="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home" ><h1 className={this.props.className}>{this.props.title}</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Button variant="outline-light" onClick={this.handleShowContactModal}>About Me</Button>
        </Container>
        <Modal show={this.props.showModal}>
          <Modal.Header>
            <Modal.Title>Quentin P Young III</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className = "modalBody">I am a student at Code Fellow, in Seattle WA.  This is my first React application.  Reach out on linkedin and follow me on github!</p>
            <a href="https://www.linkedin.com/in/quentin-young-iii/"><span className = "contactLink">LinkedIn</span></a>
            <br></br>
            <a href="https://github.com/QPThree"><span className = "contactLink">GitHub</span></a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant = "danger" onClick={this.handleCloseContactModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    )
  }
}
export default NavigationBar

