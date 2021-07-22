import React from 'react'
import PropsTypes from 'prop-types'


Location.propTypes ={
    city: PropsTypes.string.isRequired,
}


export default function Location({city}){

    console.log(city)
    return <div className="LocationCont">
        <h1>{city} </h1>
    </div>
}

