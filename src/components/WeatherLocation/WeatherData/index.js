import React from 'react'
import WeatherTemperature from './WeatherTemperature' 
import WeatherExtrainfo from './WeatherExtrainfo'
//import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from '../../../constants/weather'
import './styles.css'


export default function WeatherData({data}){

    const {temperature, weatherState, humidity, wind} = data;

    return <div className="weatherDataCont" >
       <WeatherTemperature temperature={temperature} weatherState={weatherState} />
       <WeatherExtrainfo humidity={humidity} wind={wind} />
    </div>
}



