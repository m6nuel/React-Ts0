import { ChangeEvent, useState } from "react";


export const useForm = <T extends Object>( initialState: T ) => {
    // export function useForm<T>(initialState: T){
    const [formulario, setFormulario] = useState(initialState);
    
    const handleChange = ( { target } : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
    
        console.log( name, value );
    
        setFormulario({
            ...formulario,
            [ name ]: value,
        })
    
    }

    return {
        formulario,
        handleChange,
        ...formulario //asi ya estaria desestructurado los valores del formulario
    }
}
