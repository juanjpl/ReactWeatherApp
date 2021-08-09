import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}


const forecastItemList =[
    {hour: 18, state:"clear" , temperature:25, weekDay:"Lunes"},
    {hour: 6, state:"clouds" , temperature:14, weekDay:"Martes"},
    {hour: 12, state:"drizzle" , temperature:10, weekDay:"Miercoles"},
    {hour: 18, state:"clouds" , temperature:17, weekDay:"Jueves"},
    {hour: 14, state:"rain" , temperature:12, weekDay:"Viernes"},
    {hour: 20, state:"rain" , temperature:13, weekDay:"Sabado"},
    {hour: 6, state:"clear" , temperature:22, weekDay:"Domingo"}
]




/*
const forecastItemList = [
	{ hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
	{ hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
	{ hour: 12, state:"drizzle", temperature:18, weekDay:"Viernes" },
	{ hour: 18, state:"clouds", temperature:19, weekDay:"Viernes" },
	{ hour: 6, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 12, state:"rain", temperature:17, weekDay:"Sábado" }, 
]
*/

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)