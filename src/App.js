import React, { Component } from 'react';
import './App.css';
import Movies from './layout/movies/movies'
import Header from './components/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header colour={'#111111'}>Top Movies</Header>
        <Movies />
      </div>
    );
  }
}

export default App;
