import React , {Component} from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'
import transformForecast from './../services/transformForecast';
import './styles.css';


const api_key = 'b8da0ef526ebfbf17555b36ba5596e11'
const url = "http://api.openweathermap.org/data/2.5/forecast"

export default class ForescastExtended extends Component{

    constructor(){
        super()
            this.state={
                forecastData: null
            }
        
    }


   

    componentDidMount(){
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city);
        }
    }

     updateCity = city =>{
   
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData)
                this.setState({forecastData})
            }
        )
    }



    renderForeCastItemDays(forecastData){
   
        return forecastData.map( forecast =>(
            <ForecastItem 
            key={`${forecast.weekDay} ${forecast.hour}` }
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}
            />
        ))

       
   
    }

    renderProgress(){
        return <h3>Cargando Pronóstico Extendido...</h3>
    }

    render(){

        const {city} = this.props;
        const {forecastData} = this.state;

        console.log({city})

        return <div>
            <h2 className="forescast-title">Pronostico Extendido para {city}</h2>

         { forecastData ?
         this.renderForeCastItemDays(forecastData):
         this.renderProgress()}
        </div>
    }
}

ForescastExtended.propTypes ={
    city: PropTypes.string.isRequired,  
}
