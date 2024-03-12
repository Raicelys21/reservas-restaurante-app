import React, { Component, useState } from "react";
import "./RegistroU.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { URL } from '../../App';

const RegistroU = () => {

  const navigate = useNavigate();

  const [usuarioForm, setUsuarioForm] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    contrasena: "",
    entidad: "Cliente",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    if (name === "tipoUsuario") {
      setUsuarioForm((prevUsuarioForm) => ({
        ...prevUsuarioForm,
        [name]: value,
      }));
    } else {
      setUsuarioForm((prevUsuarioForm) => ({
        ...prevUsuarioForm,
        [name]: value,
      }));
    }

    console.log(usuarioForm);
  };

  const registrarse = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        cedula: usuarioForm.cedula,
        nombre: usuarioForm.nombre,
        apellido: usuarioForm.apellido,
        telefono: usuarioForm.telefono,
        correo: usuarioForm.correo,
        contrasena: usuarioForm.contrasena,
        entidad: usuarioForm.entidad,
        codigo_confirmacion: "0001"
      };
      
      if (Object.values(requestBody).every((value) => value !== undefined && String(value).trim() !== "")) {
        console.log(`${URL}/usuario/usuario`);
        await axios.post(`${URL}/usuario/usuario`, requestBody);
        navigate("/");
      } else {
        alert("Completa todos los campos");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="center">
      <div className="ContenedorU">
        <h2 className="text-center">Registro de usuario</h2>
        <br />
        <form className="row g-1">
          <div className="col-sm">
            <label className="form-label">
              Cédula
            </label>
            <input
              type="text"
              className="form-control"
              
              name="cedula"
              onChange={HandleChange}
              placeholder="Ingrese su cédula"
            />
          </div>

          {/* <span className="d-block sm-0" /> */}
          <div className="col-sm">
            <label className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={HandleChange}
              placeholder="Nombre del usuario"
            />
          </div>
          <div className="col-sm">
            <label className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              onChange={HandleChange}
              placeholder="Apellidos del usuario"
            />
          </div>

          <span className="d-block sm-0" />
          <div className="col-sm">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              
              name="correo"
              onChange={HandleChange}
              placeholder="Ingrese su e-mail"
            />
          </div>
          <div className="col-sm">
            <label for="inputPassword4" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="contrasena"
              onChange={HandleChange}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="col-md-6">
            <label for="inputAddress2" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              name="direccion"
              onChange={HandleChange}
              placeholder="Ingrese su dirección"
            />
          </div>

          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              Teléfono
            </label>
            <input
              type="phone"
              className="form-control"
              id="inputPhone"
              name="telefono"
              onChange={HandleChange}
              placeholder="(809)-555-5555"
            />
          </div>
          <div className="col-md-6">
            <label for="inputState" className="form-label">
              Ciudad
            </label>
            <select
              id="inputState"
              className="form-select"
              name="ciudad"
              onChange={HandleChange}>
              <option selected>Seleccionar</option>
              <option>Santo Domingo</option>
              <option>Santiago de los Caballeros</option>
              <option>La Romana</option>
              <option>San Pedro de Macorís</option>
              <option>San Francisco de Macorís</option>
              <option>La Vega</option>
              <option>Puerto Plata</option>
              <option>Higüey</option>
              <option>Bonao</option>
              <option>Barahona</option>
              <option>San Cristóbal</option>
              <option>Mao</option>
              <option>Moca</option>
              <option>Azua</option>
              <option>Cotuí</option>
              <option>Salcedo</option>
              <option>San Juan de la Maguana</option>
              <option>Bani</option>
              <option>Dajabón</option>
              <option>Monte Plata</option>
              <option>Jimaní</option>
              <option>Neiba</option>
              <option>Nagua</option>
              <option>Sabaneta</option>
              <option>Montecristi</option>
              <option>Santo Domingo Este</option>
              <option>Santo Domingo Norte</option>
              <option>Santo Domingo Oeste</option>
              <option>Boca Chica</option>
              <option>San José de Ocoa</option>
              <option>Constanza</option>
              <option>El Seibo</option>
              <option>Hato Mayor del Rey</option>
              <option>Independencia</option>
              <option>Los Alcarrizos</option>
              <option>Pedernales</option>
              <option>San José de las Matas</option>
              <option>San Juan</option>
              <option>Santiago Rodríguez</option>
              <option>Valverde Mao</option>
              <option>Duvergé</option>
              <option>Jarabacoa</option>
              <option>Loma de Cabrera</option>
              <option>Las Matas de Farfán</option>
              <option>Padre Las Casas</option>
              <option>Monte Cristi</option>
              <option>Pepillo Salcedo</option>
              <option>Puerto Plata</option>
              <option>Río San Juan</option>
              <option>Samaná</option>
              <option>San José de las Matas</option>
              <option>San Juan de la Maguana</option>
              <option>San Pedro de Macorís</option>
              <option>San Rafael del Yuma</option>
              <option>Santiago</option>
              <option>Tamayo</option>
              <option>Villa Altagracia</option>
              <option>Villa Bisonó</option>
              <option>Villa González</option>
              <option>Villa Jaragua</option>
              <option>Villa Riva</option>
              <option>Yaguate</option>
            </select>
          </div>

          {/* <span className="d-block sm-0" /> */}
          <div className="col-sm text-center btn-group ">
            <button type="submit" className="btn btn-primary"
            onClick={(event) => {
              registrarse(event);
            }}>
              Registrarse
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

export default RegistroU;
