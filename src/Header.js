import React from 'react';
import NavigationBar from './NavigationBar.js';

class Header extends React.Component {
  render() {
    return (
      <header>
        <NavigationBar
        title="Horned Beasts" 
        className = 'navh1'/>
      </header>
    )
  }
}

export default Header;
