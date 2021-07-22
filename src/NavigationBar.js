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
          <Button variant="outline-success" onClick={this.handleShowContactModal}>About Me</Button>
        </Container>
        <Modal show={this.props.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>Quentin P Young III</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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

