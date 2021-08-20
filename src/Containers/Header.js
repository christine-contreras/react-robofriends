import React from 'react'
import Search from '../Components/Search'

const Header = ({handleSearch, search}) => {
    return (
        <div className="tc">
            <h1 className="light-green">Robofriends</h1>
            <Search handleSearch={handleSearch} search={search}/>
        </div>
    )
}

export default Header
