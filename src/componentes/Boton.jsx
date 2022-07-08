import '../estilos/Boton.css'

function Boton(props) {

  const esOperador = (textBtn) => {
    return isNaN(textBtn) && (textBtn !== '.') && (textBtn !== '=')
  }

  return (
    <button
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.agregarValor(props.children)}
    >
      {props.children}
    </button>
  )
}

export default Boton    