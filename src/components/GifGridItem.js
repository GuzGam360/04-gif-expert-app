import React from 'react'

export const GifGridItem = ({url, title, id}) => {


    return (
        <div className='card animate__animated animate__fadeIn animate__delay-1s'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
