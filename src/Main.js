import React from 'react';
// import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeast';
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';

//global variables

class Main extends React.Component {
  renderGrid = (arr) => {
    let tempArr = [];
    let finalArr = [];
    arr.forEach(obj => {
     
      if (tempArr.length < 3){
        tempArr.push(<Col>{ obj }</Col>);
      }
      else{
        let element = <Row>{ tempArr }</Row>;
        tempArr = [];
        finalArr.push(element);
      }
    });
    return finalArr;
  };
  
  render() {
    const Data = this.props.Data.map((obj, index) => {
      return <HornedBeast
        key = { index }
        title={obj.title}
        imgUrl={obj.image_url}
        description={obj.description}
        keyword={obj.keyword}
        horns={obj.horns}
        handleShowModal = {this.props.handleShowModal} 
        setSelectedBeast = {this.props.setSelectedBeast} />
    }
    );
    
    return (
      <main>
        <h1 className = 'mainh2'> {this.props.title}</h1>
        <h2 onClick={this.props.handleShowModal}>Show Modal</h2>
        <Container fluid>
         { this.renderGrid(Data) }
        </Container>
      </main>
    )
  }
}

export default Main;
