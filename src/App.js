import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Planets from './Components/Planets';
import SearchPlanet from './Components/SearchPlanet';

class App extends Component {
  urlSwapi = 'https://swapi.co/api/'

  // states defined for this component
  state = {
    planetList: []
  }

  /**
   * function executed when the component is mounted
   * get the list of planets
   */
  componentDidMount() {
    this.getPlanets(this.urlSwapi + 'planets/');
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
      })
  }

  /**
   * filter planets with search value gotten from the children component SearchPlanet
   * @param {*} searchValue : search value from component SearchPlanet*/
  handleSearch = (searchValue) => {
    this.setState( {planetList : this.state.planetList.filter(planet => planet.name.toLowerCase().includes(searchValue.toLowerCase()))} )
  }

  /**
   * render application
   */
  render() {
    return (
      <div>
        <h1>Star Wars Planets</h1>
        <SearchPlanet onSearchValue={this.handleSearch}></SearchPlanet>
        <Planets planets={this.state.planetList}></Planets>
      </div>
    );
  }
}

export default App;
