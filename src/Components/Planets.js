import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Planets.css'

/**
 * Display a table with all planets 
 * @param {*} planets : list of planets passed in parameters from the parent component
 */
class Planets extends Component {


    render() {
        console.log(this.props.planets)

        return (
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
                        this.props.planets.map(({ name, diameter, terrain, population, url }) => (
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