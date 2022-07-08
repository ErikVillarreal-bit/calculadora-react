import "./estilos/App.css"

import Logo from "./componentes/Logo";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonLimpiar from "./componentes/BotonLimpiar";

import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  let [input, setInput] = useState('');

  const agregarValor = (valor) => setInput(input + valor)

  const limpiarPantalla = () => setInput('')

  const calcularResultado = () => {

    //console.log(eval(input));
    try {
      if (eval(input) === undefined) {
        alert("Introduzaca un valor valido")
        setInput('')
      }
      setInput(eval(input));

    } catch (error) {
      if (error) {
        alert("Expresión inválida")
        setInput('')
      }
    }
  }

  return (
    <div className="App">
      <Logo />
      <div className="contenedor-principal">
        <Pantalla input={input} />
        <div className="fila">
          <Boton agregarValor={agregarValor}>1</Boton>
          <Boton agregarValor={agregarValor}>2</Boton>
          <Boton agregarValor={agregarValor}>3</Boton>
          <Boton agregarValor={agregarValor}>+</Boton>
        </div>
        <div className="fila">
          <Boton agregarValor={agregarValor}>4</Boton>
          <Boton agregarValor={agregarValor}>5</Boton>
          <Boton agregarValor={agregarValor}>6</Boton>
          <Boton agregarValor={agregarValor}>-</Boton>
        </div>
        <div className="fila">
          <Boton agregarValor={agregarValor}>7</Boton>
          <Boton agregarValor={agregarValor}>8</Boton>
          <Boton agregarValor={agregarValor}>9</Boton>
          <Boton agregarValor={agregarValor}>*</Boton>
        </div>
        <div className="fila">
          <Boton agregarValor={calcularResultado}>=</Boton>
          <Boton agregarValor={agregarValor}>0</Boton>
          <Boton agregarValor={agregarValor}>.</Boton>
          <Boton agregarValor={agregarValor}>/</Boton>
        </div>
        <div className="fila">
          <BotonLimpiar funLimpiar={limpiarPantalla}>Limpiar</BotonLimpiar>
        </div>
      </div>
    </div>
  );
}

export default App;
