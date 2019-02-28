import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Planets from './Components/Planets';
import SearchPlanet from './Components/SearchPlanet';
import PlanetDetails from './Components/PlanetDetails';

class App extends Component {
  // states defined for this component
  state = {
    planet: null,
  }


  
  /**
   * get the planet details with the url passed in parameter
   * @param {*} url  : url from swapi to get details
   */
  getPlanetDetail(url) {
    axios.get(url)
      .then(res => {
        const result = res.data;
        this.setState({ planet: result });
      })
  }

  /**
   * handle click on planet
   * @Param url url to get details of planet 
   */
  handlePlanetClick = (name, url) => {
    this.getPlanetDetail(url);
  }

  /**
   * render application
   */
  render() {
    if (this.state.planet) {
      return (
        <div>
          <h1>Star Wars Planets</h1>
          <SearchPlanet
            planet={this.state.planet}>
            </SearchPlanet>
          <PlanetDetails planet={this.state.planet}></PlanetDetails>
        </div>
      )
    }

    return (
      <div>
        <h1>Star Wars Planets</h1>
        
        <Planets
          onClick={this.handlePlanetClick}>
          </Planets>
      </div>
    );
  }
}

export default App;
