import React from 'react';


class Footer extends React.Component {
  render(){
    return (
      <footer bg="dark" expand = "md">
        <p>Created By: { this.props.author }</p>
      </footer>
    )
  }
}
export default Footer;
