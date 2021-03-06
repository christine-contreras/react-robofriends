import React from 'react'
import Card from '../Components/Card'

const CardContainer = ({ robots }) => {
    return (
        <div className="tc">
            { !robots.length ?
                <h2 className="white">Loading...</h2>
                :
                robots.map(robot => {
                    return <Card
                    key={robot.id}
                    name={robot.name} 
                    email={robot.email}
                    image={`https://robohash.org/${robot.id}?200x200`}
                    />
                })
                
            }
        </div>
    )
}

export default CardContainer
