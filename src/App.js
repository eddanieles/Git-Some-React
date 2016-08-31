import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <h1>Class List</h1>
            <ul role="nav">
              <li><Link to="/kevin">Kevin</Link></li>
              <li><Link to="/linsy">Linsy</Link></li>
              <li><Link to="/lake">Lake</Link></li>
              <li><Link to="/ed">Ed</Link></li>
              <li><Link to="/brandon">Brandon</Link></li>
              <li><Link to="/joe">Joe</Link></li>
              <li><Link to="/bama">Bama</Link></li>
            </ul>
          {/* add this */}
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
