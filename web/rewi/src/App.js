import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }
  }

  onConfirmed(e) {
    const sourceUrl = this.state.input.startsWith('http') ? this.state.input : `http://${this.state.input}`;
    fetch(sourceUrl).then(res => {
      window.location.href = `/wire?source=${this.state.input}`
    })
    .catch(err => console.log('invalid source ',err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <input className="App-input" 
            placeholder="Source" 
            value={this.state.input} 
            onChange={e => this.setState({input:e.target.value})}></input>
            <button className="App-button" onClick={this.onConfirmed.bind(this)}>Confirm</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
