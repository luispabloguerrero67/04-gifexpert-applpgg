import React from 'react'
import PropTypes from 'prop-types'
//import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const GifReadItem = ({ id, title, url }) => {
    return (
        <div className='card animate__animated animate__fadeIn'>

            <ImageListItem key={id}>
                <img
                    src={`${url}?w=248&fit=crop&auto=format`}
                    srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={title}
                    
                    position="below"
                />
                <p>{title}</p>
            </ImageListItem>
        </div>
    )
}

GifReadItem.propTypes = {
    //id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifReadItem