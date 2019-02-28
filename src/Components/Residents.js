import React, { Component } from 'react'
import axios from 'axios';


class Residents extends Component {
    state = {
        residents: []
    }

    /**
      * function executed when the component is mounted
      * for each resident call swapi to get the details
      */
    componentDidMount() {
        if (this.props.residents) {
            this.props.residents.map( (resident) => {
                this.getResidentDetails(resident);
            })
        }
    }

    /**
     * get the residents details with the url passed in parameter
     * map result into a table
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

    /** 
     * render a list of residents or render no residents
     */
    render() {

        if (this.state.residents.length > 0) {

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