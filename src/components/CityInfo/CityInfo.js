import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const CityInfo = ({city,country}) => {
    return (
        <Grid container
       justify="center"
        alignItems="center"
       
        >
            <Typography display="inline" variant="h4">{city}, </Typography>
            <Typography display="inline" variant="h6">{country}</Typography>
        </Grid>
    )
}

CityInfo.propTypes = {
city: PropTypes.string.isRequired,
country: PropTypes.string.isRequired,
}

export default CityInfo
