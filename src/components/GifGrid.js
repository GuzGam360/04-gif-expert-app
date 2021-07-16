import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category ); //renombrar en desestructuracin nombreactual:nombrenuevo
    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages);
    // }, [category])
    
    return (
    <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        {loading && <p className="animate__animated animate__flash">cargando</p>}

        <div className='card-grid'>
            {
                images.map( img => (
                
                <GifGridItem key={img.id} {...img} /> //Utilizas el operador spread para traer todas las propiedades de las imagenes como una propiedad independient 
                
                ))
            }
        </div>
    </>
    )
}
