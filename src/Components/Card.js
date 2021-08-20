import React from 'react'

const Card = ({email, image, name}) => {
    return (
        <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5 pa3 pa4-ns">
            <div className="tc">
                <img src={image} alt={name} title={name} className="br-100 h5 w5 dib ba b--black-40 pa2"/>
            
                <h2>{name}</h2>
                <p className="f5 fw4 gray mt0">{email}</p>
            </div>
        </div>
    )

}

export default Card
