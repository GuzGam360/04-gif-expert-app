import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])
    
    
    const getGifs = async() =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=One Punch Man&limit=10&api_key=GRJwf45odOqZy5fd9DS8uqJx1YcLAllX'; //EndPoint generado con PostMan
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
                
            }
        })

        console.log(gifs);
        setImages(gifs);
    } 

    
    return (
        <div>
            <h3>{ category }</h3>
            {
                images.map( img => (
                    <GifGridItem key={img.id} {...img}/> //Utilizas el operador spread para traer todas las propiedades de las imagenes como una propiedad independiente
                ))
            }
        </div>
    )
}
