import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css';
import Data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false,
      showContactModal:false,
      selectedBeast : {
        title: "test",
        description: "testing Description",
        imgUrl: "Placeholder",
      },
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
    });
  }
  handleShowContactModal = () => {
    this.setState({
      showContactModal:true,
    });
  }
  handleCloseContactModal = () => {
    this.setState({
      showContactModal:false,
    });
  }
  setSelectedBeast = (title, description, imgUrl) => {
    this.handleShowModal();
    console.log(this.state.selectedBeast)
    console.log('ran once');
    this.setState({
      selectedBeast: {
        title: title,
        description: description,
        imgUrl : imgUrl,
      }
    })
  }
  render() {
    return (
      <>
        <Header 
        showContactModal = {this.state.showContactModal}
        handleShowContactModal = {this.handleShowContactModal}
        handleCloseContactModal = {this.handleCloseContactModal}/>
        <SelectedBeast
          imgUrl = {this.state.selectedBeast.imgUrl}
          title= {this.state.selectedBeast.title}
          description = {this.state.selectedBeast.description}
          showModal = {this.state.showModal}
          handleShowModal={this.handleShowModal}
          handleCloseModal={this.handleCloseModal}
          setState={this.setState}
        />
        <Main 
        title = 'All Beasts'
        handleShowModal = {this.handleShowModal}
        Data = {Data}
        setState = {this.setState}
        setSelectedBeast = {this.setSelectedBeast}
        />
        <Footer 
        author = 'Quentin Young'/>
      </>
    )
  }
}

export default App;
