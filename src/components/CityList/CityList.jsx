import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid' 
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo' 
import Weather from './../Weather'

//li: es un item (segun tag html, tiene el role "listitem")
//renderCityAndCountry se va a convertir en una función que retorna otra función

const renderCityAndCountry = (eventOnClickCity) => {
  const renderCityAndCountryInternal = cityAndCountry =>{

    const {city, country} = cityAndCountry

    return (
        <ListItem 
        button
        key={city} 
        onClick={eventOnClickCity}>

          <Grid container
          justify="center"
          alignItems="center">
            <Grid item
            md={8}
            xs={12}
            >
                <CityInfo city ={city} country={country}/>
            </Grid>
            <Grid item 
            md={4}
            xs={12}
            >
                 <Weather temperature={25} state="sunny"/>
            </Grid>

          </Grid>
            
           
        </ListItem>
    ) 
  }
  return renderCityAndCountryInternal
  
}

//como podemos mejorar la validacion ?
const CityList = ({cities, onClickCity}) => {
    return (
      <List>
          {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
          }
      </List>
    )
}

CityList.propTypes = {
cities: PropTypes.array.isRequired,
onClickCity: PropTypes.func.isRequired,
}

export default CityList
