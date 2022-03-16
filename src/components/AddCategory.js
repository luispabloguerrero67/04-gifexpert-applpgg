import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setcategories }) {

    const [inputvalue, setInputvalue] = useState('')

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputvalue.trim().length > 2) {
            setcategories((cat) => [...cat, inputvalue]);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>AddCategory</h2>
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
