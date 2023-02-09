import { useState } from 'react';

interface User {
    uid: string,
    name: string
}

const tempUser: User = {
    uid: '123',
    name: 'asd'
}


export const Usuario = () => {
  
    const [ user , setUser ] = useState<User>(tempUser);   
  
    const login = () =>{
        setUser({
            uid: 'ABC123',
            name: 'Jesus Delgado'
        })
    }

    return (
        <div className='mt-5'>
            <h3> Usuario: </h3>

            <button
                className='btn btn-outline-primary'
                onClick={ login }
            >
                Login
            </button>

            {
                (!user)
                    ? <pre> No hay Usuario </pre>
                    : <pre> { JSON.stringify( user ) } </pre>

            }

        </div>
    )
}
