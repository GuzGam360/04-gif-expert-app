import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('Valor Inicial');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();//Para prevenir el comportamiento por defecto del formulario

        if(inputValue.trim().length > 2) { //.trim para borrar espacios que tienes antes y despues del string
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        
        
        // console.log('Sumbit Hecho');
    }
    
    return (
            <form onSubmit={handleSumbit}>
                <input type="text" value={inputValue} onChange={handleInputChange}></input>
            </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequiered,
}