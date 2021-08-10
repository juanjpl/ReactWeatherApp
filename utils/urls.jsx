

const apiid="b8da0ef526ebfbf17555b36ba5596e11"

export const getWeatherUrl =({city, countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiid}`     


export const getForecastUrl = ({city, countryCode}) =>`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiid}`
