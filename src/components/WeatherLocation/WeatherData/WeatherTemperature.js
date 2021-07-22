import React from 'react' 
import WeatherIcons from 'react-weathericons';
import PropsTypes from 'prop-types'
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,THUNDER,DRIZZLE} from '../../../constants/weather'
import './styles.css'

const stateToIconName= weatherState=>{
    switch(weatherState){
        case CLOUD:
            return "cloud";
            case CLOUDY:
                return "cloudy";
                case SUN:
                    return "day-sunny";
                    case RAIN:
                        return "rain";
                        case SNOW:
                            return "snow";
                            case WINDY:
                                return "windy";
                                case THUNDER:
                                return "thunder";
                                case DRIZZLE:
                                return "drizzle";

          
            default:
                return"day-sunny";
    }

}

const getWeatherIcon = weatherState =>{
    return(<WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x"/> )
}

WeatherTemperature.propsTypes ={
    temperature: PropsTypes.number.isRequired,
    weatherState:PropsTypes.string.isRequired,
}

export default function WeatherTemperature({temperature, weatherState}) {
    return <div className="weatherTemperatureCont" >

        {getWeatherIcon(weatherState)}
      
        <span className="temperature" >{` ${temperature} `}</span>
        <span className="temperaturetype">°C</span>
    </div>
}