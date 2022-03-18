import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifRead from './components/GifRead';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function GifExpertApp(props) {

  const [categories1, setcategories] = useState([''])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
              {
                categories1.map((ct) =>
                (<GifRead
                  key={ct}
                  category={ct} />)
                )
              }
          </Grid>
        </Grid>
      </Box>
    </>

  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp
