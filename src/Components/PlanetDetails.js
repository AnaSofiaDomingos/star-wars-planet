import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PlanetDetails.css'

import Residents from './Residents';
import Films from './Films';

class PlanetDetails extends Component {

    /**
     * render a table with all planet details 
     * render a list of residents
     * render a list of films 
     */
    render() {
        const planet = this.props.planet;
        return (
            <div>
                <div>
                    <h3> Planet Details </h3>
                    <table className="planet-details table ">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{planet.name}</td>
                            </tr>
                            <tr>
                                <td>Diameter</td>
                                <td>{planet.diameter}</td>
                            </tr>
                            <tr>
                                <td>Terrain</td>
                                <td>{planet.terrain}</td>
                            </tr>
                            <tr>
                                <td>Population</td>
                                <td>{planet.population}</td>
                            </tr>
                            <tr>
                                <td>Gravity</td>
                                <td>{planet.gravity}</td>
                            </tr>
                            <tr>
                                <td>Climate</td>
                                <td>{planet.climate}</td>
                            </tr>
                            <tr>
                                <td>Orbital period</td>
                                <td>{planet.orbital_period}</td>
                            </tr>
                            <tr>
                                <td>Rotation period</td>
                                <td>{planet.rotation_period}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3> Residents </h3>
                    <Residents residents={planet.residents}></Residents>
                </div>


                <div >
                    <h3> Films </h3>
                    <Films films={planet.films}></Films>
                </div>
            </div>
        )
    }
}

// check prop types
PlanetDetails.propTypes = {
}

export default PlanetDetails