import React, {useState , useEffect} from 'react'
//import { Link} from 'react-router-dom'
impport Axios from 'axios'
import {useParams} from 'react-router-dom'
import AppFrame from './../components/AppFrame' 
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import 'moment/locale/es'
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
    {hour: 18, state:"clear" , temperature:25, weekDay:"Lunes"},
    {hour: 6, state:"clouds" , temperature:14, weekDay:"Martes"},
    {hour: 12, state:"drizzle" , temperature:10, weekDay:"Miercoles"},
    {hour: 18, state:"clouds" , temperature:17, weekDay:"Jueves"},
    {hour: 14, state:"rain" , temperature:12, weekDay:"Viernes"},
    {hour: 20, state:"rain" , temperature:13, weekDay:"Sabado"},
    {hour: 6, state:"clear" , temperature:22, weekDay:"Domingo"}
]



const CityPage = () => {
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const {city, countryCode} = useParams()
    //console.log(params) 

    useEffect( () => {
     
        const getForecast = async() => {
            const apiid="b8da0ef526ebfbf17555b36ba5596e11"
            const url =`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiid}`

            try {
                const {data} = await axios.get(url)
                const toCelsius = (temp) => convertiUnits(temp).from('K').to('C').toFixed(0)
                console.log("data",data)

                const daysAhead = [0,1,2,3,4,5,6]
                const days = daysAhead.map( d => moment().add(d, "d"))
                const dataAux = days.map( day =>{

                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = momen.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })

                    console.log("day.dayOfYear()" , day.dayOfYear())
                    console.log("tempObjArray" , tempObjArray)
                    //dayHour, min , max

                    const temps = tempObjArray.map(item => item.main.temp)

                    

                    return({
                        dayHour: d.format('ddd'),
                        min:toCelsius(Math.min(...temps)),
                        max:toCelsius(Math.max(...temps))
                    })
                })

                setData(dataAux)

                const interval = [ 4,8,12,16,20,24]

                const forecastItemListAux = data.list
                .filter( (item, index) => interval.includes(index))
                .map(item =>{
                    return({
                        hour: moment.unix(item.dt).hour(),
                        weekday: moment.unix(item.dt).format('dddd'),
                        state: item.weather[0].main.toLowerCase(),
                        temperature: toCelsius(item.main.temp)
                    })
                })
                setForecastItemList( forecastItemListAux)
            }catch(error){
                console.log(error)
            }
        }
    
        
       getForecast()
    }, [city , countryCode])


    //const city = "Buenos Aires"
    const country ="Argentina"
    const state= "clouds"
    const temperature=20
    const humidity=80
    const wind=5
    //const data=dataExample
    //const forecastItemList=forecastItemListExample


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
                <WeatherDetails humidity={humidity} wind={wind}/>
    
        </Grid>

        

        <Grid item xs={12}>
                {
                    
                   data && <ForecastChart data={data}/>}
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
