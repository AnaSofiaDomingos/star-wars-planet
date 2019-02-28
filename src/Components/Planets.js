import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import './Planets.css'

import Pagination from './Pagination';

/**
 * Display a table with all planets 
 * @param {*} planets : list of planets passed in parameters from the parent component
 */
class Planets extends Component {
    state = {
        number: 0,
        planetList: [],
        nextPage: null,
        previousPage: null,
        total : 0
    }

      /**
   * function executed when the component is mounted
   * get the list of planets
   */
  componentDidMount() {
    this.getPlanets('https://swapi.co/api/planets/', true);
  }

  /**
   * update planet list 
   * @Param url url to get the new planet list
   * @Param next boolean to know if number is incremented or decremented
   */
    updatePlanetList = (url, next) => {
        this.getPlanets(url, next)
    }

    /**
    * get the planets with the url passed in parameter
    * @param {*} url  : url from swapi to get planets
    */
    getPlanets(url, next) {
        axios.get(url)
            .then(res => {
                const result = res.data;
                this.setState({ number: next ? this.state.number + result.results.length : this.state.number - result.results.length })
                this.setState({ total: result.count })
                this.setState({ previousPage: result.previous });
                this.setState({ nextPage: result.next });
                this.setState({ planetList: result.results });
            })
    }

    render() {
        if (this.state.planetList == 0)
            return (<div>No planets found</div>)


        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Diameter</th>
                            <th>Terrain</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.planetList.map(({ name, diameter, terrain, population, url }) => (
                                <tr key={name} onClick={() => this.props.onClick(name, url)}>
                                    <td className="name">{name}</td>
                                    <td className="diameter">{diameter}</td>
                                    <td className="terrain">{terrain}</td>
                                    <td className="population">{population}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    <Pagination
                        previous={this.state.previousPage}
                        next={this.state.nextPage}
                        count={this.state.number}
                        total={this.state.total}
                        onPagination={this.updatePlanetList}>
                    </Pagination>
                }
            </div>

        )
    }
}

// check prop types
Planets.propTypes = {
    planets: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    )
}

export default Planets