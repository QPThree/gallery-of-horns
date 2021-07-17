import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css';
import Data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';

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
        
       <SelectedBeast
       showModal = {this.state.showModal}
       handleShowModal = {this.handleShowModal}
       setState = {this.setState}
       handleCloseModal = {this.handleCloseModal}
        />
        <Main 
        title = 'All Beasts'
        handleShowModal = {this.handleShowModal}
        Data = {Data}
        setState = {this.setState}

        />
        <Footer 
        author = 'Quentin Young'/>
      </>
    )
  }
}

export default App;
