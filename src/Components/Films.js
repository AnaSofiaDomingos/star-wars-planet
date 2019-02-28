import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';


class Films extends Component {
    state = {
        films: []
    }

    /**
      * function executed when the component is mounted
      * for each film call swapi to get the details
      */
    componentDidMount() {
        if (this.props.films) {
            this.props.films.map(film => {
                this.getFilmDetails(film);
            })
        }
    }

    /**
     * get the film details with the url passed in parameter
     * map result into a table
     * @param {*} url  : url from swapi to get details
     */
    getFilmDetails(url) {
        axios.get(url)
            .then(res => {
                const result = res.data;
                this.setState({
                    films: this.state.films.concat([result])
                })
            })
    }

    /** 
     * render a list of film with some details if there is films with the planet or render no film
     */
    render() {
        if (this.state.films.length > 0) {
            return (
                <ul>
                    {
                        this.state.films.map(({ title, episode_id, release_date, producer, director }) => (
                            <li key={episode_id}>{title} (episode {episode_id}) in {release_date} directed by {director} and produced by {producer}</li>
                        ))
                    }
                </ul>
            )
        }

        return (
            <div>No films</div>
        )
    }
}

export default Films