import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units' 
import Alert from '@material-ui/lab/Alert' 
import Grid from '@material-ui/core/Grid' 
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo' 
import Weather from './../Weather'


const getCityCode = (city, countryCode) => `${city}-${countryCode}`

//li: es un item (segun tag html, tiene el role "listitem")
//renderCityAndCountry se va a convertir en una función que retorna otra función

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {

  

    const {city, country, countryCode} = cityAndCountry
    //const {temperature, state} = weather

    return (
        <ListItem 
        button
        key={getCityCode(city, countryCode)} 
        onClick={()=> eventOnClickCity(city, countryCode)}>

          <Grid container
          justifyContent="center"
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
                
                   <Weather temperature={ weather && weather.temperature} state={weather && weather.state}/>
                  
                  
            </Grid>

          </Grid>
            
           
        </ListItem>
    ) 
 
  
}

//como podemos mejorar la validacion ?
const CityList = ({cities, onClickCity}) => {

  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    const setWeather = async (city, countryCode) =>{

      const apiid="b8da0ef526ebfbf17555b36ba5596e11"
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiid}`     

 
try{
      const response = await axios.get(url)

      const {data} =response

        const temperature = Number(  convertUnits(data.main.temp).from("K").to("C").toFixed(0) )
        const state = data.weather[0].main.toLowerCase()

        const propName = getCityCode(city, countryCode) // ej [ciudad de mexico - mexico]
        const propValue ={temperature , state} // el:{temperature: 10, state: "sunny"}

        //console.log("propName", propName)
        //console.log("propName", propValue)

        setAllWeather(allWeather => (  {...allWeather, [propName] : propValue}))

}catch(error){

        if(error.response){
          setError("Ah ocurrido un error en el servidor del clima")
        }else if(error.request){
          setError("Verifique la conexión a internet")
        }else{
          setError("Error al cargar los datos")
        }
}

  

      /*
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

      .catch(error =>{
        //Errores que nos responde el server
        if(error.response){
          //const{data , status} =error.response 
          //console.log("data" , data)
          //console.log("status" , status)
          setError("Ah ocurrido un error en el servidor del clima")
        }else if(error.request){
          //Errores que suceden por no llegar al server
          //console.log("Server in-accesible o no tengo internet")
          setError("Verifique la conexión a internet")
        }else{
          //Errores imprevistos
          //console.log("Errores imprevistos")
          setError("Error al cargar los datos")
        }

        

        
      })*/

    }

    cities.forEach(({city,countryCode})=> {
      setWeather(city,countryCode)
      
    })
   
  }, [cities])


  //const weather = {temperature: 10, state:"sunny"}
    return (
      <div>
        {
          error && <Alert onClose={()=> setError(null)} severity="error">{error}</Alert>
        }

      <List>
          {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
            allWeather[ getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]))
          }
      </List>

      </div>
     
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
