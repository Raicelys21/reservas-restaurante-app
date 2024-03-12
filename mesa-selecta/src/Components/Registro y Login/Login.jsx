import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "../../App";

const Login = () => {
  const [usuarioForm2, setUsuarioForm2] = useState({
    correo: "",
    contrasena: "",
  });

  const [usuarioForm, setUsuarioForm] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    contrasena: "",
    entidad: "Cliente",
  });

  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioForm2((prevUsuarioForm) => ({
      ...prevUsuarioForm,
      [name]: value,
    }));
  };

  const iniciarSesion = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${URL}/usuario/usuario/correo/${usuarioForm2.correo}/${usuarioForm2.contrasena}`
      );

      const usuario = response.data;
      console.log(usuario);
      if (usuario) {
        cookies.set("_id", usuario._id, { path: "/" });
        cookies.set("cedula", usuario.cedula, { path: "/" });
        cookies.set("nombre", usuario.nombre, { path: "/" });
        cookies.set("apellido", usuario.apellido, { path: "/" });
        cookies.set("correo", usuario.correo, { path: "/" });
        cookies.set("contrasena", usuario.contrasena, { path: "/" });
        cookies.set("tipoUsuario", usuario.entidad, { path: "/" });
        navigate("/HomeInt");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Usuario o contraseña incorrecta");
    }
  };

  return (
    <div className="center">
      <div className="login">
        <form action="" className="formulario">
          <h1>Iniciar sesión</h1>
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            name="correo"
            id="correo"
            onChange={handleChange}
          />
          <label htmlFor="contrasena"> Contraseña</label>
          <input
            type="password"
            name="contrasena"
            id="contrasena"
            onChange={handleChange}
          />

          <span className="d-block" />
          <div className="text-center btn-group ">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(event) => {
                iniciarSesion(event);
              }}>
              Iniciar sesión
            </button>
            <Link to="/">
              <button type="submit" className="btn btn-danger">
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
