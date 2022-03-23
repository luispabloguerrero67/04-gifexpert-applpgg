import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function AddCategory({ onchangeAddcategories, onchangeItem }) {

    const [inputvalue, setInputvalue] = useState('')

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputvalue.trim().length > 2) {

            onchangeAddcategories(inputvalue);
        }
    }
    const handleReset = () => {
        onchangeAddcategories('');
    }

    const handleLoadMore = () => {
        onchangeItem(10);
    }
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={4}>
                        <input placeholder='Search a gif'
                            onChange={(e) => handleInputChange(e)} type='text' 
                            className='input'/>
                        <p>{inputvalue}</p>
                        {/* 
                        <TextField
                            placeholder='Search a gif'
                            InputProps={{ style: { color: 'white' } }}
                            className='input'
                            type='text'
                            value={inputvalue}
                            onChange={(e) => handleInputChange(e)}
                        /> */}
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Button variant="contained" onClick={handleSubmit}>Search</Button>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Button variant="contained" onClick={handleReset}>Clear</Button>
                    </Grid>

                    <Grid item xs={2} md={2}>
                        <Button variant="contained" onClick={handleLoadMore}>load more</Button>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}

AddCategory.propTypes = {
    onchangeAddcategories: PropTypes.func.isRequired,
    onchangeItem: PropTypes.func.isRequired,
}

export default AddCategory
