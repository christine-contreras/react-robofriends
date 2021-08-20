import React from 'react'
import Search from '../Components/Search'

const Header = ({handleSearch, search}) => {
    return (
        <div className="tc">
            <h2>Robofriends</h2>
            <Search handleSearch={handleSearch} search={search}/>
        </div>
    )
}

export default Header
