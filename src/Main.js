import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Data from './data.json';
import HornedBeast from './HornedBeast';
import './Main.css';

//global variables


class Main extends React.Component{
  render(){
    const elementsArr = [];

    Data.forEach(obj => {
      elementsArr.push(<HornedBeast 
      title = {obj.title}
      imgUrl = {obj.image_url} 
      description = {obj.description}
      keyword = {obj.keyword}
      horns = {obj.horns} />)
      }
    );

    return (
      <main>
        <h1> {this.props.title}</h1>
        <CardColumns>
          {elementsArr}
        </CardColumns>
      </main>
    )
  }
}

export default Main;
