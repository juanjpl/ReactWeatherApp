import {useState, useEffect} from 'react' 
import axios from 'axios'
import {getWeatherUrl} from './../utils/urls'
import {getCityCode} from './../utils/utils'
import getAllWeather from './../utils/transform/getAllWeather'






const useCityList= (cities, allWeather, onSetAllWeather)=> {
  //  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    const setWeather = async (city,  countryCode) =>{

      const url = getWeatherUrl ({city , countryCode})  

 
try{

  onSetAllWeather({[getCityCode(city,countryCode)] : {}})
  
      const response = await axios.get(url)


      const allWeatherAux = getAllWeather(response,city,countryCode)

      onSetAllWeather(allWeatherAux)

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
      if(!allWeather[getCityCode(city,countryCode)]){

        setWeather(city,countryCode)
      }
      
      
    })
   
  }, [cities,onSetAllWeather,allWeather])

  return { error, setError}

}

export default useCityList