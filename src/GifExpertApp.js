import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';

function GifExpertApp(props) {

  const [categories1, setcategories] = useState(['category1', 'category2', 'category3'])
  
  /*
  const addCategory = (e) => { 
    
    //setcategories([...categories1, "category4"] );
    setcategories( cats => [...cats, 'cat4']);
   }
  */
 
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories}/>
      <hr />


      <ol>
      {
        categories1.map((ct) => {
          return <li key={ct}>{ct}</li>
        })
      }
      </ol>
    </>

  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp
