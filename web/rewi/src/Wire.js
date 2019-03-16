import React, { Component } from 'react';
import './Wire.css';

class Wire extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }

    this.source = window.location.search.substr(8);
    console.log(this.source);
  }

  render() {
    return (
      <div className="Wire">
      </div>
    );
  }
}

export default Wire;
