import React from 'react';
// import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeast';
import './Main.css';
import { Container, Form, CardColumns } from 'react-bootstrap';

//global variables

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: 0,
    };
  }
  renderGrid = (arr) => {
    let finalArr = [];
    arr.forEach(obj => {
      finalArr.push(obj);
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
    let filteredData = [];
    if (this.state.filterBy === 0) {
      filteredData = Data.map((obj, index) =>
        <HornedBeast
          key={index}
          title={obj.title}
          imgUrl={obj.image_url}
          description={obj.description}
          keyword={obj.keyword}
          horns={obj.horns}
          handleShowModal={this.props.handleShowModal}
          setSelectedBeast={this.props.setSelectedBeast} />);
    } else {
      filteredData = Data.map((obj, index) => (obj.horns === this.state.filterBy) ?
        <HornedBeast
          key={index}
          title={obj.title}
          imgUrl={obj.image_url}
          description={obj.description}
          keyword={obj.keyword}
          horns={obj.horns}
          handleShowModal={this.props.handleShowModal}
          setSelectedBeast={this.props.setSelectedBeast} /> : false);
    }

    return (
      <main>
        <Container fluid>



          <Form><span className="formHeader">Filters</span>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label className="formLabel">Horns</Form.Label>
              <Form.Control as="select" custom onChange={this.handleFormSelection}>
                <option value="0">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">4+</option>
              </Form.Control>
            </Form.Group>
          </Form>



          <h1 className='mainh2'> {this.props.title}</h1>
          <CardColumns>
            {this.renderGrid(filteredData)}

          </CardColumns>


        </Container>
      </main>
    )
  }
}

export default Main;
