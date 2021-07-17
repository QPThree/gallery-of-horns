import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './HornedBeast.css';
import SelectedBeast from './SelectedBeast';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    //states
    this.state = {
      favorites: 0,
    }
  }
  addFavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    })
  }
  setSelectedBeast = () => {
    this.props.setSelectedBeast(this.props.title, this.props.description, this.props.imgUrl);
  }
  render() {
    
    return (
      <>
        <Card border="dark" bg="red" className="card">
          <Image variant="top" src={this.props.imgUrl} title={this.props.title} alt={this.props.title} />
          <Card.Body>
            <Card.Title className="cardTitle">{this.props.title}</Card.Title>

            <p>{(this.state.favorites ? '💛' + this.state.favorites : '')}</p>
            <Button variant="outline-warning" onClick={this.addFavorite}>Favorite</Button>
            <Button variant="light" onClick={this.setSelectedBeast}>Info</Button>

            <Card.Text> {this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>

    )
  }
}

export default HornedBeast
