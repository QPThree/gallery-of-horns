import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    //states
    this.state = {
      favorites: 0,
    }
  }
  addFavorite = () => {
    this.setState({
      favorites : this.state.favorites + 1,
    })
  }
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} title={this.props.title} alt = 'Alt text'></img>
        <p>{'💛' + this.state.favorites}</p>
        <p onClick = {this.addFavorite}> { this.props.description }</p>
      </>
      
    )
  }
}

export default HornedBeast
