import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component{

  render(){
    return(
      // Contents here
      <Modal show={this.props.showModal} >
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Image src={this.props.imgUrl} />
          <Modal.Body>
            {this.props.description}
          </Modal.Body>
          <Button variant = "danger" onClick={this.props.handleCloseModal}>Close</Button>
        </Modal>
    );
  }
}

export default SelectedBeast
