import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifRead from './components/GifRead';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function GifExpertApp(props) {

  const [categories1, setcategories] = useState({
    categories: [''],
    maxItems: 10
  })

  const handlecategories = (something) => {
    if(something !== ''){
      setcategories({ ...categories1, categories: [something, categories1.categories] });
    } else{
      setcategories({ ...categories1, categories: [something] });
    }

  }
  const handleMaxItems = (second) => { 
    setcategories({...categories1, maxItems: categories1.maxItems+second})
   }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Demo Gifs</h2>
            <AddCategory onchangeAddcategories={handlecategories} onchangeItem={handleMaxItems}/>
            <hr />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {
              categories1.categories.map((ct) =>
              (<GifRead
                key={ct}
                category={ct}
                itemMax={categories1.maxItems}
              />)
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
