import React from 'react'
import { useHistory} from 'react-router-dom' 
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame' 
import CityList from './../components/CityList/CityList'

const cities =[
    {city:"Buenos Aires" , country:"Argentina", countryCode: "AR"},
    {city:"Bogotá" , country:"Colombia" ,countryCode: "CO"},
    {city: "Ciudad de México" , country:"México" ,countryCode: "MX"},
    {city: "Madrid" , country:"España" ,countryCode: "ES"}
]

const MainPage = () => {

    const history= useHistory()

    const onClickHandler = (city, countryCode) => {
        //history.push nos permite alterar la url por programacion
        history.push(`/city/${countryCode}/${city}`)
            console.log("city",city)
            console.log("countryCode",countryCode)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
            <CityList cities={cities}
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}



export default MainPage
