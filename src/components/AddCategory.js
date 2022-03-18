import React, { useState } from 'react';
import PropTypes from 'prop-types';
import autocompleteGifs from '../helpers/autocompleteGifs'
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
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputvalue}
                    onChange={(e) => handleInputChange(e)}

                ></input>
            </form>

        </>

    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory
