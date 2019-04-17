import React, { Component } from 'react';
import MusicChartBox from './Containers/MusicChartBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Music Chart </h1>
          <MusicChartBox />
      </div>
    );
  }
}

export default App;
