import React, {Component} from 'react'
import { CircularProgress  } from '@material-ui/core';
import convert from 'convert-units'
import Location from './Location'
import WeatherData from './WeatherData'
import {CLOUDY,SUN,RAIN,SNOW,THUNDER,DRIZZLE} from './../../constants/weather'
import PropTypes from 'prop-types'
//import transformWeather from './../../services/transformWeather';
import './styles.css';


//const city = 'Buenos Aires,ar'
const api_key = 'b8da0ef526ebfbf17555b36ba5596e11'
const url = "http://api.openweathermap.org/data/2.5/weather"



WeatherData.propTypes ={
    data:PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        onWeatherLocationClick: PropTypes.func.isRequired,

    })
}
/*
const data1 ={
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind:'10 m/s'
}


const data2 ={
    temperature: 10,
    weatherState: WINDY,
    humidity: 5,
    wind:'25 m/s'
}


export default function WeatherLocation () {
    return <div className="weatherLocation">
        <Location city={"San Martin de Los Andes  !"} />
        <WeatherData data={data}/>
    </div>
    
}*/



export default class WeatherLocation extends Component{

    constructor({city}){
        super();
        this.state = {
            city,
            data: null
        
        };
    
        console.log(this.state);
        console.log("Constructor")
    }

     getTemp = kelvin =>{
        return Number(convert(kelvin).from('K').to('C').toFixed(2));
    }
    
    
     getWeatherState = weather =>{
         const {id} = weather[0];

         if(id<300){
             return THUNDER
         }else if(id<400){
             return DRIZZLE
         }else if(id<600){
             return RAIN
         }else if(id<700){
             return SNOW
         }else if(id===800){
             return SUN
         }else{
             return CLOUDY
         }
 
    }
    
    
    transformWeather = weather_data =>{
    const {weather} = weather_data
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather);
    
        const temperature = this.getTemp(temp);
    
        const data={
    
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
    
        }
    
        return data;
    }


   
/*
    handleUpdateClick= ()=>{
      )

       //console.log(api_weather);

       


        this.setState  ({
            city: "San Martin de Los Andes ",
            data: data2
        
        });

        console.log("actualizado")
        //console.log(this.state);
    }*/

    componentWillMount(){
        //se ejecuta una unica vez despues de construirse y antes de renderizarse
        console.log("componentWillMount")
        
        const {city} = this.state; 
        const api_weather =`${url}?q=${city}&appid=${api_key}`;

        fetch(api_weather)
       
       .then( data=>{
           //debugger;
           //console.log(data);
           return data.json();

       })
       
       .then( weather_data =>{
           const data = this.transformWeather(weather_data);
           this.setState({data: data});
           //console.log(weather_data)
       })
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        console.log("render")

        const {onWeatherLocationClick} = this.props
        
        const{city,data} = this.state;
 
        return<div className="weatherLocation" onClick={onWeatherLocationClick}>
        <Location city={city} />
       {data ? <WeatherData data={data}/> :<CircularProgress color="secondary" />}
        {/*  <button onClick={this.handleUpdateClick} >Actualizar</button>*/}
    </div>
    }
}

