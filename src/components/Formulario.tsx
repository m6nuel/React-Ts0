// import { ChangeEvent, useState } from "react"
import { useForm } from '../Hooks/useForm';

interface FormData {
    email: string,
    nombre: string,
    edad: number
}

export const Formulario = () => {

    const { formulario, handleChange, email, edad, nombre } = useForm<FormData>({
        email: 'jesusmanuel@delgado',
        nombre: 'jesus manuel',
        edad: 32
    })

    // const { nombre, email, edad } = formulario; // con el ...formulario del return de useForm evitamos esta linea

    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChange = ( { target } : ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target;

    //     console.log( name, value );

    //     setFormulario({
    //         ...formulario,
    //         [ name ]: value,
    //     })

    // }

    return (
      <form autoComplete="off">
          <div className="mb-3">
              <label className="form-label"> Email: </label>
              <input type="email" 
                  className="form-control"
                  name="email"
                  value={ email }
                  onChange={ handleChange }
              />
          </div>

          <div className="mb-3">
              <label className="form-label"> Nombre: </label>
              <input type="text" 
                  className="form-control"
                  name="nombre"
                  value={ nombre }
                  onChange={ handleChange }
              />
          </div>

          <div className="mb-3">
              <label className="form-label"> Edad: </label>
              <input type="number" 
                  className="form-control"
                  name="edad"
                  value={ edad }
                  onChange={ handleChange }
              />
          </div>

          <pre> { JSON.stringify(formulario) } </pre>
      </form>
    )
  }