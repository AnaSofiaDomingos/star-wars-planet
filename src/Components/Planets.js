import React from 'react'
import PropTypes from 'prop-types'

import './Planets.css'

/**
 * Display a table with all planets 
 * @param {*} planets : list of planets passed in parameters from the parent component
 */
const Planets = ({ planets }) => (
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
                planets.map(({ name, diameter, terrain, population }) => (
                    <tr key={name} scope="row">
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

// check prop types
Planets.propTypes = {
    planets: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    )
}

export default Planets