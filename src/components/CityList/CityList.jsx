import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units' 
import Grid from '@material-ui/core/Grid' 
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo' 
import Weather from './../Weather'

//li: es un item (segun tag html, tiene el role "listitem")
//renderCityAndCountry se va a convertir en una función que retorna otra función

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {

  

    const {city, country} = cityAndCountry
    //const {temperature, state} = weather

    return (
        <ListItem 
        button
        key={city} 
        onClick={eventOnClickCity}>

          <Grid container
          justify="center"
          alignItems="center">
            <Grid item
            md={9}
            xs={12}
            >
                <CityInfo city ={city} country={country}/>
            </Grid>
            <Grid item 
            md={3}
            xs={12}
            >
                 {
                   weather ? 
                   (<Weather temperature={weather.temperature} state={weather.state}/>) : 
                   ("No hay datos")
                  
                  }
            </Grid>

          </Grid>
            
           
        </ListItem>
    ) 
 
  
}

//como podemos mejorar la validacion ?
const CityList = ({cities, onClickCity}) => {


/* allWeather
{
  [Buenos Aires-Argentina]:{},
  [Bogotá-Colombia]:{},
  [Madrid-España]:{},
  [Ciudad de México-México]:{}
}
*/

  const [allWeather, setAllWeather] = useState({})

  useEffect(() => {
    const setWeather = (city, country, countryCode) =>{

      const apiid="b8da0ef526ebfbf17555b36ba5596e11"
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiid}`     

      axios
      .get(url)
      .then(response =>{
        const {data} =response

        const temperature = Number(  convertUnits(data.main.temp).from("K").to("C").toFixed(0) )
        const state = data.weather[0].main.toLowerCase()

        const propName = `${city}-${country}` // ej [ciudad de mexico - mexico]
        const propValue ={temperature , state} // el:{temperature: 10, state: "sunny"}

        console.log("propName", propName)
        console.log("propName", propValue)

        //set[variableEstado] ( variableEstado =>variableEstado +1  )
        setAllWeather(allWeather => (  {...allWeather, [propName] : propValue}))
      })

    }

    cities.forEach(({city,country, countryCode})=> {
      setWeather(city, country , countryCode)
      
    })
   
  }, [cities])


  //const weather = {temperature: 10, state:"sunny"}
    return (
      <List>
          {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
          }
      </List>
    )
}



CityList.propTypes = {
cities: PropTypes.arrayOf(
  PropTypes.shape({
    city:PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
  })
).isRequired,
onClickCity: PropTypes.func.isRequired,
}

export default CityList
