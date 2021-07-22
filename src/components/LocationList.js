import React from 'react';
import WeatherLocation from './WeatherLocation'
import PropTypes from 'prop-types';


export default function LocationList({cities,onSelectedLocation}){

    const handleWeatherLocationClick = (city)=>{
        console.log("handleWeatherLocationClick")
        onSelectedLocation(city);
    }
    

    const strToComponent = cities => (
        cities.map((city)=>(<WeatherLocation 
                                        key={city} 
                                        city={city}
                                        onWeatherLocationClick={()=>handleWeatherLocationClick(city)}/>) )
    )
 
    

        return <div>
          {/* 
        <WeatherLocation city={"Buenos Aires,ar"}/>
        <WeatherLocation city={"Bogotá,col"}/>
        <WeatherLocation city={"Santiago,cl"}/>
             */}

        {strToComponent(cities)}
       
    </div>
    
}

LocationList.propTypes ={
    cities : PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
}

