//import React, { useState, useEffect, Component } from 'react'
//import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifReadItem from './GifReadItem';
function GifRead({ category }) {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animatedanimate__fadeIn">{category}</h3>
      {loading && <p  className='animate__animated animate__fadeIn'>Loading</p>}
      <div className='card-grid'>
        {
          images.map((img) =>
          (<GifReadItem
            key={img.id}
            {...img} />)
          )
        }

      </div>
    </>
  )
}

GifRead.propTypes = {
}

export default GifRead
