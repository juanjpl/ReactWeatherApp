import React, {Component} from 'react' 
import PropTypes from  'prop-types'
import WeatherData from './../WeatherLocation/WeatherData'




export default class ForecastItem extends Component{
    render(){

        return <div>
            <h2>{this.props.weekDay} - {this.props.hour} hs</h2>
            <WeatherData data={this.props.data}/>
        </div>
    }
}

ForecastItem.propTypes ={
    weekDay : PropTypes.string.isRequired,
    hour : PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
  
}
