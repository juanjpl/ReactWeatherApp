import React , {useState , useCallback , useMemo} from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
//import Grid from '@material-ui/core/Grid'
import WelcomePage from './Pages/WelcomePage' 
import MainPage from './Pages/MainPage' 
import CityPage from './Pages/CityPage' 
import NotFoundPage from './Pages/NotFoundPage' 



const App = () => {

  const [allWeather, setAllWeather] = useState({})
  const [allChartData, setAllChartData] = useState({})
  const [allForecastItemList, setForecastItemList] = useState({})

  const onSetAllWeather = useCallback( (weatherCity) =>{ 
    setAllWeather(allWeather=> ({...allWeather , ...weatherCity }) )
  },[setAllWeather])

  const onSetChartData = useCallback((chartDataCity) =>{
    setAllChartData(chartData => ({...chartData , ...chartDataCity}))
  },[setAllChartData] )
 
  const onSetForecastItemList = useCallback( (forecastItemListCity)=> {
    setForecastItemList(forecastItemList => ({...forecastItemList , ...forecastItemListCity}))
  },[setForecastItemList])

  const actions = useMemo( ()=> ({
    onSetAllWeather,
    onSetChartData , 
    onSetForecastItemList
  }),[onSetAllWeather , onSetChartData , onSetForecastItemList])


  const data= useMemo( ()=> ({
    allWeather ,
    allChartData, 
    allForecastItemList
  }),[allWeather , allChartData , allForecastItemList])
    return ( 
      
            <Router>
                
                <Switch>
                    <Route exact path="/">
                      <WelcomePage/>
                    </Route>
                    <Route path="/main">
                        <MainPage data={data} actions={actions} />
                    </Route>
                    <Route path="/city/:countrycode/:city">
                      <CityPage data={data} actions={actions} />
                    </Route>
                    <Route >
                     <NotFoundPage/>
                    </Route>

                </Switch>

            </Router>
    
    )
}



export default App
