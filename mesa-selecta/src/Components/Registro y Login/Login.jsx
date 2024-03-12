import React from "react";
import "./Login.css";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="center">
      <div className="login">
        <form action="" className="formulario">
          <h1>Iniciar sesión</h1>
          <label htmlFor="">Nombre de Usuario</label>
          <input type="text" name="" id="" />
          <label htmlFor=""> Contraseña</label>
          <input type="password" name="" id="" />
          
          <span class="d-block" />
            <div class="text-center btn-group ">
              <button type="submit" class="btn btn-primary">
                Iniciar sesión
              </button>
              <Link to="/">
              <button type="submit" class="btn btn-danger">
                Volver
              </button>
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
