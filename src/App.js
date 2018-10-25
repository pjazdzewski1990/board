import React, { Component } from 'react';
import './App.css';

import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </header>
      </div>
    );
  }
}

export default App;
