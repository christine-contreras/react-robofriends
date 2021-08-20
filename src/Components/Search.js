import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <input
                className="ba b--green bg-lightest-blue pa3"
                type="search" 
                placeholder="search robot" 
                name="search"
                value={this.props.search}
                onChange={(event) => this.props.handleSearch(event)} 
                />
            </div>
        )
    }
}

export default Search
