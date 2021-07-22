import React from 'react' 
import PropTypes from 'prop-types' 
import './styles.css'

WeatherExtrainfo.propsTypes ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}


export default function WeatherExtrainfo({humidity,wind}){
    return <div className="weatherExtrainfoCont" >
<span className="extraInfoText">{`Humedad: ${humidity} %`} </span>
<span className="extraInfoText">{`Vientos: ${wind}`} </span>
    </div>
}