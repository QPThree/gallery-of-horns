import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <p>Created By: { this.props.author }</p>
    )
  }
}
export default Footer;
