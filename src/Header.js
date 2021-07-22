import React from 'react';
import NavigationBar from './NavigationBar.js';

class Header extends React.Component {
  render() {
    return (
      <header>
        <NavigationBar
        title="Horned Beasts" 
        className = 'navh1'
        showModal = {this.props.showContactModal}
        handleShowContactModal = {this.props.handleShowContactModal}
        handleCloseContactModal = {this.props.handleCloseContactModal}/>
      </header>
    )
  }
}
export default Header;
