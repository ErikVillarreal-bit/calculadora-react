import '../estilos/BotonLimpiar.css'

function BotonLimpiar({funLimpiar}) {
  return (
    <button 
      className={'boton-limpiar'}
      onClick={()=>funLimpiar()}
    >
      Limpiar
    </button>
  )
}

export default BotonLimpiar