import React , {useMemo} from 'react'
import AppFrame from './../components/AppFrame' 
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import useCityPage from './../hooks/useCityPage'
import  LinearProgress from '@material-ui/core/LinearProgress'
import useCityList from './../hooks/useCityList'
import {getCityCode} from './../utils/utils'
import {getCountryNameByCountryCode} from './../utils/serviceCities'




const CityPage = ({actions ,data}) => {
    const {allWeather , allChartData , allForecastItemList} =data
    const {onSetAllWeather , onSetChartData , onSetForecastItemList} = actions

const {city,countryCode} = useCityPage( allChartData , allForecastItemList ,onSetChartData , onSetForecastItemList)

const cities = useMemo( () => ([{city, countryCode}]) , [city , countryCode])

useCityList(cities ,allWeather, onSetAllWeather)

    const cityCode = getCityCode(city, countryCode)
    const weather = allWeather[cityCode]

    
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const state= weather && weather.state
    const temperature= weather && weather.temperature
    const humidity=  weather && weather.humidity
    const wind=  weather && weather.wind


    return (
        <AppFrame>

        <Grid container
            justifyContent="space-around"
            direction="column"
            spacing={3}>
        <Grid item container 
            xs={12}
            justifyContent="center"
            alignItems="flex-end">
                <CityInfo city={city} country={country}/>
        </Grid>
        <Grid container item sx={12}>
        
                <Weather state={state} temperature={temperature}/>
                {
                    humidity && wind &&
                    <WeatherDetails humidity={humidity} wind={wind}/>
                    }
    
        </Grid>


        <Grid item>
            {
                !chartData && !forecastItemList && <LinearProgress/>
            }

        </Grid>
        

        <Grid item xs={12}>
                {
                    
                   chartData && <ForecastChart data={chartData}/>}
        </Grid>

        <Grid item xs={12} >
               { 
               forecastItemList && <Forecast forecastItemList={forecastItemList}/>}
        </Grid>

    </Grid>

        </AppFrame>
    
    )
}



export default CityPage
