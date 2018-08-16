import React, { Component } from 'react';
import './App.css';
import slowData from './slowcontroldata.json'

import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Chart data={slowData} />
      </div>
    );
  }
}

export default App;
