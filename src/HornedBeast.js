import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



class HornedBeast extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     horns: 
  //   }
  // }
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} title={this.props.title} alt = 'Alt text'></img>
        <p> { this.props.description }</p>
        
      </>
      
    )
  }
}

export default HornedBeast
