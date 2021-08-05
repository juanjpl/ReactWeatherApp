import React from 'react'
import { useHistory} from 'react-router-dom' 
import CityList from './../components/CityList/CityList'

const cities =[
    {city:"Buenos Aires" , country:"Argentina"},
    {city:"Bogotá" , country:"Colombia"},
    {city: "Ciudad de México" , country:"México"},
    {city: "Madrid" , country:"España"}
]

const MainPage = () => {

    const history= useHistory()

    const onClickHandler = () => {
        //history.push nos permite alterar la url por programacion
        history.push("/city")
    }
    return (
        <div>
        <h2>Lista de Ciudades </h2>
        
        <CityList cities={cities}
                    onClickCity={onClickHandler} />
        </div>
    )
}



export default MainPage
