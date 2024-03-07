import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <form action="" className='formulario'>
      <h1>LOG IN</h1>
            <label htmlFor="">Nombre de Usuario</label>
            <input type="text" name="" id="" />
            <label htmlFor=""> Contraseña</label>
            <input type="password" name="" id="" />
            <label htmlFor="" className="recordarpass">
            <button>
              Iniciar Sesión
            </button>
            
            <button>
              Registrate
            </button>
            <br />
            <label htmlFor="">¿Se te olvido la contraseña?</label>
            </label>
      </form>
    </div>
  )
}

export default Login