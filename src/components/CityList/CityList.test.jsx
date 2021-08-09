import React from 'react'
import {render , fireEvent} from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect';
import CityList from './CityList' // SUT

const cities =[
    {city:"Buenos Aires" , country:"Argentina", countrycode: "AR"},
    {city:"Bogotá" , country:"Colombia" ,countrycode: "CO"},
    {city: "Ciudad de México" , country:"México" ,countrycode: "MX"},
    {city: "Madrid" , country:"España" ,countrycode: "ES"}
]


test("CityList render", async () =>{

    //AAA Arrange Act Assert

    const{findAllByRole} = render (<CityList cities={cities} onClickCity={()=>{}}></CityList>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async()=>{

    //AAA debemos simular una accion del usuario: click sobre un item
    // vamos a usar una funcion "mock"

    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}></CityList>)

    const items = await findAllByRole("listitem")

    //ahora, para simular la accion, vamos a utilizar fireEvent
    fireEvent.click(items[0])

    //que deberia suceder ?
    //se debio llamar a la funcion fnClickonItem una unica vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})
