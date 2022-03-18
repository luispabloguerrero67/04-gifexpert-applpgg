import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
function AddCategory({ setcategories }) {

    const [inputvalue, setInputvalue] = useState('')

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputvalue.trim().length > 2) {
            setcategories((cat) => [inputvalue, ...cat]);
        }
    }
    const handleReset = () => {

        setcategories((cat) => ['']);

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
                <TextField
                    placeholder='Search a gif'
                    inputProps={{ style: { color: 'white' } }}
                    className='input'
                    type='text'
                    value={inputvalue}
                    onChange={(e) => handleInputChange(e)}
                />
                <Button variant="contained" onClick={handleSubmit}>Search</Button>

                <Button variant="contained" onClick={handleReset}>Clear Gifs</Button>
            </Box>

        </>

    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory
