import React from 'react'

export const GifGridItem = ({url, title, id}) => {


    return (
        <div className='card'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
