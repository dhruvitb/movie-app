import React, { Component } from 'react';
import './App.css';
import Movies from './containers/movies/movies';
import Header from './components/header/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieInfo from './containers/movieInfo/movieInfo'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={(props) => <Header colour={'#111111'}>Top Movies</Header>}/>
          <Route path='/' exact component={Movies}/>
          <Route path='/movie/:MovieId' exact component={MovieInfo}/>
        </div>
      </Router>
    );
  }
}

export default App;
