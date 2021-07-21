import React from 'react';
// import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeast';
import './Main.css';
import { Container, Row, Col, Form } from 'react-bootstrap';

//global variables

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterBy: 2,
    };
  }
  renderGrid = (arr) => {
    let tempArr = [];
    let finalArr = [];
    arr.forEach(obj => {

      if (tempArr.length < 3) {
        tempArr.push(<Col>{obj}</Col>);
      }
      else {
        let element = <Row>{tempArr}</Row>;
        tempArr = [];
        finalArr.push(element);
      }
    });
    return finalArr;
  };
  handleFormSelection = (e) => {
    e.preventDefault();
    this.setState({
      filterBy: parseInt(e.target.value),
    })
    console.log(e.target.value)
    console.log(this.state.filterBy);
  }
  render() {
    const Data = this.props.Data;

    const filteredData = Data.map((obj, index) => (obj.horns === this.state.filterBy) ?
      <HornedBeast
        key={index}
        title={obj.title}
        imgUrl={obj.image_url}
        description={obj.description}
        keyword={obj.keyword}
        horns={obj.horns}
        handleShowModal={this.props.handleShowModal}
        setSelectedBeast={this.props.setSelectedBeast} /> : false);

    return (
      <main>
            <Container fluid>
        <Row>
          
            <Col sm="2">
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Custom select</Form.Label>
                  <Form.Control as="select" custom onChange = {this.handleFormSelection}>
                    <option value = "all">All</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4+</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          
          <Col sm="10">
            <h1 className='mainh2'> {this.props.title}</h1>
            <h2 onClick={this.props.handleShowModal}>Show Modal</h2>
              {this.renderGrid(filteredData)}
          </Col>
        </Row>
            </Container>
      </main>
    )
  }
}

export default Main;
