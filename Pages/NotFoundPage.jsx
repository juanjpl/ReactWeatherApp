import React from 'react'
//import {Link} from 'react-router-dom' 
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import {Link as RouterLink} from 'react-router-dom'
import {IconContext} from 'react-icons'
import {WiRain} from 'react-icons/wi'

const NotFoundPage = props => {
    return (
        <Grid container
                    direction="column"
                    justify="center"
                    className="full">

                        <div className="hightlight">
                            <Grid container sx={12}
                                justify="center"
                                alignItems="center">
                                    <Grid item>
                                        <IconContext.Provider value={{size:"6em"}}>
                                            <WiRain/>
                                        </IconContext.Provider>

                                    </Grid>

                                    <Grid item
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center">

                                            <Typography variant="h4" color="inherit">
                                              404 | La pagina no existe
                                            </Typography>
                                            <Link color="inherit"
                                            aria-label="menu"
                                            component={RouterLink} 
                                            to="/main">
                                                Volver al inicio
                                            </Link>

                                    </Grid>
                            </Grid>

                        </div>

                </Grid>
    )
}



export default NotFoundPage
