import React from 'react' 
import {render} from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect';
import CityInfo from './CityInfo' // SUT subject under Testing

test("CityInfo render", async ()=>{
     //expect(true).toBeFalsy()

    //AAA
    //Arrange
    //Act
    const city ="Buenos Aires";
    const country = "Argentina";
    
    //render .. renderiza el componente y retorna una seria de funciones de utilidad
    //En este utilizamos "findAllByRole" para consultar a nuestro componente
    //vamos a analizar su estado en el Assert

    const{findAllByRole} = render(<CityInfo city={city} country={country}/>)

    
    //assert

    // findAllByRole va a buscar todo los componentes que sean ...
    // heading ---> "h1 h2 h3 h4"
    //el resultado es un array de componentes (cityAndCountryComponent)

    const cityAndCountryComponents = await findAllByRole("heading")

        //cuando el test va a ser correcto ?
    //Definicion
    //cuando en el primer componente se encuentre la ciudad "Buenos Aires"
    //y cuando el segundo componente se encuentre el pais "Argentina"

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)


   
})