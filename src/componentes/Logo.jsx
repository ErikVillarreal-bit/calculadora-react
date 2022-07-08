import '../estilos/Logo.css'

import logo from "../imagenes/logo.jpg"


function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
        <img src={logo} alt="logo" className="freecodecamp-logo" />
    </div>
  )
}

export default Logo