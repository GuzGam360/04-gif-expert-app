import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
    
    // const caterogries = ['One Punch Man', 'Dragon Ball', 'Samurai X']
    
    const [caterogries, setCategories] = useState(['One Punch Man', 'Dragon Ball', 'Samurai X']);

    const handleAdd = () => {
        /** TAREA: Al presionar el boton mandar a llamar handleAdd y añadir un nuevo Elemento al arreglo*/
        // setCategories('Boku No Hero'); si yo quiero definir el estado nuevo asi de un arreglo estoy eliminando el estado anterior.
        setCategories([...caterogries, 'Boku No Hero']);
        //setCategories(cats => [...cats, 'Boku No Hero']);
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    caterogries.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;