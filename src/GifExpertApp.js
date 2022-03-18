import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifRead from './components/GifRead';

function GifExpertApp(props) {

  const [categories1, setcategories] = useState(['tamales'])

  /*
  const addCategory = (e) => { 
    
    //setcategories([...categories1, "category4"] );
    setcategories( cats => [...cats, 'cat4']);
   }
  */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />


      <ol>
        {
          categories1.map((ct) =>
            (<GifRead 
              key={ct}
              category={ct}/>)
          )
        }
      </ol>
    </>

  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp