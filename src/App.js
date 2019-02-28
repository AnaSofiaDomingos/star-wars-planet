import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Planets from './Components/Planets';
import SearchPlanet from './Components/SearchPlanet';
import PlanetDetails from './Components/PlanetDetails';
import { withRouter } from 'react-router-dom'

class App extends Component {
  // states defined for this component
  state = {
    planetList: [],
    planet: null
  }

  /**
   * function executed when the component is mounted
   * get the list of planets
   */
  componentDidMount() {
    this.getPlanets('https://swapi.co/api/planets/');
  }

  /**
   * get the planets with the url passed in parameter
   * @param {*} url  : url from swapi to get planets
   */
  getPlanets(url) {
    axios.get(url)
      .then(res => {
        const result = res.data;
        this.setState({ planetList: result.results });
        this.setState({ previousPage: result.previous });
        this.setState({ nextPage: result.next });
        this.setState({ numberPlanets: result.count });
      })
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
   * filter planets with search value gotten from the children component SearchPlanet
   * @param {*} searchValue : search value from component SearchPlanet*/
  handleSearch = (searchValue) => {
    this.setState({ planetList: this.state.planetList.filter(planet => planet.name.toLowerCase().includes(searchValue.toLowerCase())) })
  }

  handlePlanetClick = (name, url) => {
    this.setState({ showPlanetDetail: true });
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
            onSearchValue={this.handleSearch}
            planet={this.state.planet}>
          </SearchPlanet>
          <PlanetDetails planet={this.state.planet}></PlanetDetails>
        </div>
      )
    }

    return (
      <div>
        <h1>Star Wars Planets</h1>
        <SearchPlanet onSearchValue={this.handleSearch}></SearchPlanet>
        <Planets
          
          onClick={this.handlePlanetClick}>
        </Planets>
      </div>
    );
  }
}

export default App;
