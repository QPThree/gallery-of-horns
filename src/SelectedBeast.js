import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component{

  render(){
    return(
      // Contents here
      <Modal show={this.props.showModal} >
          <Modal.Header>
            <Modal.Title>My Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Modal Body Here
          </Modal.Body>
          <Button variant = "danger" onClick={this.props.handleCloseModal}>Close</Button>
        </Modal>
    );
  }
}

export default SelectedBeast
