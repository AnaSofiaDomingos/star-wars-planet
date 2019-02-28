import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Planets from './Components/Planets';

class App extends Component {
  state = {
    planetList : []
  }

  componentDidMount() {
    this.getPlanets('https://swapi.co/api/planets/');
  }

  getPlanets(url) {
    axios.get(url)
      .then(res => {
        const result = res.data;
        this.setState({ planetList : result.results });
      })
  }

  render() {
    return (
      <div>
        <h1>Star Wars Planets</h1>
        <Planets planets={this.state.planetList}></Planets>
      </div>
    );
  }
}

export default App;
