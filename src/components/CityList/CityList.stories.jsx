import React from 'react' 
import CityList from './CityList' 
import {action} from '@storybook/addon-actions' 


export default {
    title: "CityList",
    component: CityList,
}

const cities =[
    {city:"Buenos Aires" , country:"Argentina"},
    {city:"Bogotá" , country:"Colombia"},
    {city: "Ciudad de México" , country:"México"},
    {city: "Madrid" , country:"España"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city - accepted")}/>