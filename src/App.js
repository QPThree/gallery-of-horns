import React from 'react';
import './App.css';
import './HornedBeast.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main 
        title = 'Horned Beasts!'
        />
        <Footer 
        author = 'Quentin Young'/>
      </>
    )
  }
}

export default App;
