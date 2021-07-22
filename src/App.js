import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {Paper} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocationList from './components/LocationList'
import ForescastExtended from './components/ForescastExtended'
import './App.css';


const cities =["Buenos Aires,ar","Washington dc,us","Bogotá,col","Ciudad de México,mx","Madrid,es","Santiago de chile,cl"];


const useStyles =theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appStyle:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }

})





class App extends Component {

  constructor(){

    super();

    this.state = {
      searchNodes: "",
      city: null ,
    };
  
  }



  handleSelectedLocation =city=>{

    this.setState({city})

    console.log(
     
      `handleSelectedLocation ${city}`)
    }



  render(){

    const { classes } = this.props;
    const {city} = this.state;
  
   
  return (
    <div className="App">

      <Grid>
        <Row>
  
          <Col xs={12}>
     
          </Col>

          <Col xs={12}>
          <div className={classes.root}>
      <AppBar position="static" className={classes.appStyle}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
          </Col>
          
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={3}>
            <div className="detail">

              { city ?  
              
              <ForescastExtended city={city}/>:
              null
              }
             
            </div>
            </Paper>
            
          </Col>
        </Row>
      </Grid>

 
    

    </div>
  );
}
}

export default withStyles(useStyles, { withTheme: true })(App);

