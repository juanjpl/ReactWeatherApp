
import {getCityCode , toCelsius} from './../utils'
import {validValues} from './../../components/IconState'


const getAllWeather = (response, city, countryCode) => {
    
    const {data} =response

    const temperature = toCelsius(data.main.temp)

    const humidity=data.main.humidity
    const wind=data.wind.speed

    const stateFromServer = data.weather[0].main.toLowerCase()

    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode) // ej [ciudad de mexico - mexico]
    const propValue ={temperature , state , humidity, wind} // el:{temperature: 10, state: "sunny"}

    //console.log("propName", propName)
    //console.log("propName", propValue)

    return  (  {[propName] : propValue})
}

export default getAllWeather