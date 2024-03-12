<<<<<<< HEAD
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
=======
/* eslint-disable no-unused-vars */
import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <form action="" className='formulario'>
      <h1>LOG IN</h1>
            <label htmlFor="">Correo</label>
            <input type="email" name="" id="" />
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
>>>>>>> dbc722c4c2d81c09d820389d4aa0d5187342cb09
    </div>
  );
};

export default Login;
