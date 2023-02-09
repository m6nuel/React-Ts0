import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos: number,
    segundos?: number
}

export const Timer = ( { milisegundos }: TimerArgs ) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timer>(); //referencia al tipo de dato setinterval y limpia el intervalo dentro del useEffect
    
    useEffect(() => {
        ref.current && clearInterval( ref.current )  //limpia el intervalo evita errores
        ref.current = setInterval( () => setSegundos( s => s + 1 ), milisegundos )
    }, [milisegundos])
    

  return (
    <div>
        <h4>Timer: <small> { segundos } </small> </h4>

    </div>
  )
}
