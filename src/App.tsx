import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";

import { Usuario } from "./components/Usuario";



function App() {
  return (
    <>
      <h1> Hola mundo -TS!!! </h1>
      <hr/>
      <h2> UseState</h2>
      <Counter />
      <Usuario />

      <h2> UseEfect - UseRef </h2>
      <hr/>
      <TimerPadre />

      <h2> UseReducer </h2>
      <hr/>

      <ContadorRed />

      <h2> CustomHooks </h2>
      <hr/>

      <Formulario />

      <br /><br /><br /><br /><br />


    </>
  );
}

export default App;
