import React from 'react'
import {Button, Grid} from '@mui/material'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, xl:2 }}>
            <Grid item xs={6} sm={6} md={6} xl={6}>
                <Link to="/Mediciones" className='tbtn'><Button variant='contained' text="Teams" color='primary'>Mediciones</Button></Link>                      
            </Grid>
        </Grid>
    </div>
  )
}
