import React, { Component } from 'react'

import './Pagination.css'

class Pagination extends Component {
    /**
     * function to send url to parent to upate planet list with next planets
     */
    next = () => {
        this.props.onPagination(this.props.next, true)
    }

    /**
     * function to send url to parent to upate planet list with previous planets
     */
    previous = () => {
        this.props.onPagination(this.props.previous, false)
    }

    render() {
        const previousDisabled = !this.props.previous ? 'disabled' : '';
        const nextDisabled = !this.props.next ? 'disabled' : '';

        return (
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${previousDisabled}`}>
                        <a className="page-link" onClick={this.previous}>Previous</a>
                    </li>
                    <li className="page-item">
                        <span className="page-link">{this.props.count} / {this.props.total}</span>
                    </li>
                    <li className={`page-item ${nextDisabled}`} >
                        <a className="page-link" onClick={this.next}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination