import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchPlanet extends Component {
    // states defined for this component
    state = {
        searchValue: ''
    }

    /**
     * set the search value to the prop so the parent Component can access it
     * @param event : event catch from the onSubmit form
     */
    search = event => {
        event.preventDefault()
        this.props.onSearchValue(this.state.searchValue)
    }

    /**
     * set the search value when the user types
     * @param event : event catch from the onChange input
     */
    onChangeValue = event => {
        this.setState({
            searchValue: event.target.value
        })
    }


    // render a nav bar with a input for the value searched and a button to submit
    render() {

        // if we are in the details planet remove search input
        if (this.props.planet) {

            return (
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand" href="/" >List of Planets</a>
                </nav>
            )

        }

        // else display search input
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href="/" >List of Planets</a>
                <form className="form-inline" onSubmit={this.search}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search a planet name"
                        value={this.state.searchValue}
                        onChange={this.onChangeValue} />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}

// check of props types 
SearchPlanet.propTypes = {
}


export default SearchPlanet