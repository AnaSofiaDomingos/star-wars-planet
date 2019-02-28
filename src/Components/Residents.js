import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';


class Residents extends Component {
    state = {
        residents: []
    }

    componentDidMount() {
        if (this.props.residents) {
            this.props.residents.map(resident => {
                this.getResidentDetails(resident);
            })
        }
    }

    /**
     * get the planet details with the url passed in parameter
     * @param {*} url  : url from swapi to get details
     */
    getResidentDetails(url) {
        axios.get(url)
            .then(res => {
                const result = res.data;
                this.setState({
                    residents: this.state.residents.concat([result])
                })
            })
    }

    render() {
        
        console.log(this.state.residents)
        if (this.state.residents) {

            return (
                <ul>
                    {
                        this.state.residents.map(({ name }) => (
                            <li key={name}>{name}</li>
                        ))
                    }
                </ul>
            )
        }

        return (
            <div> No residents</div>
        )
    }
}

export default Residents