import React, { useState } from "react";
import "./RegistroRest.css";
import { Link } from "react-router-dom";
import { URL } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RestaurantesRegistro = () => {
  const navigate = useNavigate();

  const [restauranteForm, setRestauranteForm] = useState({
    nombre_restaurante: "",
    telefono: "",
    ciudad: "",
    ubicacion: "",
    cant_mesas: 0,
    num_personas: 0,
    menu: "",
    hora_apertura: "",
    hora_cierre: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setRestauranteForm((prevUsuarioForm) => ({
      ...prevUsuarioForm,
      [name]: value,
    }));

  };

  const registrarse = async (e) => {
    e.preventDefault();
  
    try {
      const requestBody = {
        cod_restaurante: restauranteForm.nombre_restaurante,
        nombre_restaurante: restauranteForm.nombre_restaurante,
        menu: restauranteForm.menu,
        telefono: restauranteForm.telefono,
        ubicacion: restauranteForm.ubicacion,
        ciudad: restauranteForm.ciudad,
        hora_apertura: restauranteForm.hora_apertura,
        hora_cierre: restauranteForm.hora_cierre,
        cant_mesas: restauranteForm.cant_mesas,
        num_personas: restauranteForm.num_personas,
      };
  

      await axios.post(`${URL}/restaurante/restaurante`, requestBody);
      navigate("./");
  
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  

  return (
    <div className="center">
      <div className="ContenedorRest">
        <form className="row g-3">
          <h2 className="text-center">Registro del establecimiento</h2>
          <br />
          <div className="col-md-3">
            <label htmlFor="inputName" className="form-label">
              Nombre del establecimiento
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre_restaurante"
              onChange={HandleChange}
              id="inputName"
              placeholder="Ingrese el nombre del establecimiento"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="inputPhone" className="form-label">
              Teléfono del establecimiento
            </label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              onChange={HandleChange}
              id="inputPhone"
              placeholder="809-555-5555"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="inputState" className="form-label">
              Ciudad
            </label>
            <select
              id="inputState"
              className="form-select"
              name="ciudad"
              value={restauranteForm.ciudad} // Use value prop here
              onChange={HandleChange}>
              <option value="">Seleccionar</option>
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

          <div className="col-md-3">
            <label htmlFor="inputMaps">Google Maps del Establecimiento</label>
            <input
              type="text"
              className="form-control"
              name="ubicacion"
              onChange={HandleChange}
              id="inputMaps"
              placeholder="https://maps.app.goo.gl/FkDLmARyyp6Vgg7U6"
            />
          </div>

          <div className="col-md-4">
            <div className="cantidadMesas">
              <label htmlFor="">Cantidad de personas</label>
              <input
                type="number"
                className="form-control"
                name="num_personas"
                onChange={HandleChange}
                placeholder="3"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="cantidadMesas">
              <label htmlFor="">Cantidad de mesas</label>
              <input
                type="number"
                className="form-control"
                name="cant_mesas"
                onChange={HandleChange}
                placeholder="8"
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="">Menu</label>
            <input
              type="text"
              className="form-control"
              placeholder="https://fornobravo.myshopify.com/"
              name="menu"
              onChange={HandleChange}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputOpeningTime">Horario de Apertura</label>
            <input
              type="time"
              className="form-control"
              id="inputOpeningTime"
              placeholder=""
              name="hora_apertura"
              onChange={HandleChange}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputClosingTime">Horario de Cierre</label>
            <input
              type="time"
              className="form-control"
              id="inputClosingTime"
              placeholder=""
              name="hora_cierre"
              onChange={HandleChange}
            />
          </div>

          <div className="col-12 text-center btn-group">
            <button
              type="submit"
              className="btn btn-primary"
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

export default RestaurantesRegistro;
