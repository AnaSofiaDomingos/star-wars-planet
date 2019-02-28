import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';


class Films extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        if (this.props.films) {
            this.props.films.map(film => {
                this.getFilmDetails(film);
            })
        }
    }

    /**
     * get the planet details with the url passed in parameter
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

    render() {
        if (this.state.films) {
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