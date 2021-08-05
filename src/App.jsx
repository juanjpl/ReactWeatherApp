import React from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import WelcomePage from './Pages/WelcomePage' 
import MainPage from './Pages/MainPage' 
import CityPage from './Pages/CityPage' 
import NotFoundPage from './Pages/NotFoundPage' 



const App = props => {
    return ( 
        <Grid container
        justify="center"
        direction="row">
            <Grid item sm={12}>
            <h1> App </h1>
            <Router>
                
               

                <Switch>
                    <Route exact path="/">
                      <WelcomePage/>
                    </Route>
                    <Route path="/main">
                        <MainPage/>
                    </Route>
                    <Route path="/city">
                      <CityPage/>
                    </Route>
                    <Route >
                     <NotFoundPage/>
                    </Route>

                
                </Switch>

            </Router>
            </Grid>
        </Grid>
    )
}



export default App
