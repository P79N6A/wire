import React, { Component } from 'react';
import App from './App';
import Wire from './Wire';

class Nav extends Component {

  constructor(props) {
    super(props);
    console.log(window.location);
  }

  render() {
    return (
      <div>
        {
          window.location.pathname.indexOf("wire") === -1  
          ? <App /> : <Wire />
        }
      </div>
    );
  }
}

export default Nav;
