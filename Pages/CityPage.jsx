import React from 'react'
//import { Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample =[
    {hour: 18, state:"sunny" , temperature:25, weekDay:"Lunes"},
    {hour: 6, state:"cloud" , temperature:14, weekDay:"Martes"},
    {hour: 12, state:"fog" , temperature:10, weekDay:"Miercoles"},
    {hour: 18, state:"cloudy" , temperature:17, weekDay:"Jueves"},
    {hour: 14, state:"rain" , temperature:12, weekDay:"Viernes"},
    {hour: 20, state:"rain" , temperature:13, weekDay:"Sabado"},
    {hour: 6, state:"sunny" , temperature:22, weekDay:"Domingo"}
]



const CityPage = () => {

    const city = "Buenos Aires"
    const country ="Argentina"
    const state= "cloudy"
    const temperature=20
    const humidity=80
    const wind=5
    const data=dataExample
    const forecastItemList=forecastItemListExample


    return (
    <Grid container
    justify="space-around"
    direction="column"
    spacing={3}>
        <Grid item container 
            xs={12}
            justify="center"
            alignItems="flex-end">
                <CityInfo city={city} country={country}/>
        </Grid>
        <Grid container item sx={12}>
        
                <Weather state={state} temperature={temperature}/>
                <WeatherDetails humidity={humidity} wind={wind}/>
    
        </Grid>

        

        <Grid item xs={12}>
                <ForecastChart data={data}/>
        </Grid>

        <Grid item xs={12} >
                <Forecast forecastItemList={forecastItemList}/>
        </Grid>

    </Grid>
    )
}



export default CityPage
