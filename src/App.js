import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false,
    }
  }
  handleShowModal = () => {
    this.setState({
      showModal:true,
    });
  }
  handleCloseModal = () => {
    this.setState({
      showModal:false,
      selectedBeast: {},
    });
  }
  render() {
    return (
      <>
        <Header />
        
        <Modal show={this.state.showModal} >
          <Modal.Header>
            <Modal.Title>My Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Modal Body Here
          </Modal.Body>
          <Button variant = "danger" onClick={this.handleCloseModal}>Close</Button>
        </Modal>
        <Main 
        title = 'All Beasts'
        handleShowModal = {this.handleShowModal}
        />
        <Footer 
        author = 'Quentin Young'/>
      </>
    )
  }
}

export default App;
