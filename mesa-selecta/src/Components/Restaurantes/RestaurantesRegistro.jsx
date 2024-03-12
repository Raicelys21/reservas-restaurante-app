import React, { Component, useState } from "react";
import "./RegistroRest.css";
import imagen from "../../../assets/restaurant-icon.webp";

export default class RestaurantesRegistro extends Component {
  render() {
    return (
      <div className="center">
        <div className="ContenedorRest ">
          <form className="row g-3">
            <h1 className="text-center">Registro del establecimiento</h1>

            {/* <div class="ContenedorRest">
                    <img src={imagen} alt="Logo del restaurante" class="icono-restaurante"/>
                </div> */}

            <div className="col-md-6">
              <label for="inputAddress" class="form-label">
                Nombre del establecimiento
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Ingrese el nombre del establecimiento"
              />
            </div>

            <div className="col-md-6"></div>
            <div className="col-md-6">
              <label for="inputAddress" class="form-label">
                Teléfono del establecimiento
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="809-555-5555"
              />
            </div>

            <div className="col-md-6">
              <label for="inputAddress2" class="form-label">
                Dirección del establecimiento
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Ingrese su dirección"
              />
            </div>
            <div className="">
              {/* La misma funcion que utilizo samir en @Reserva */}

              <div className="col-sm-4 cantidadPero">
                <label htmlFor="">Cantidad de mesas</label>
                <button className="btn btn-secondary">-</button>
                <label htmlFor="">1</label>
                <button className="btn btn-primary">+</button>
              </div>
              <div className="col-sm-4 cantidadPero">
                <label htmlFor="">Cantidad de personas</label>
                <button className="btn btn-secondary">-</button>
                <label htmlFor="">1</label>
                <button className="btn btn-primary">+</button>
              </div>
            </div>
            <div className="col-md-3  ">
              <label htmlFor="">Instagram del establecimiento</label>
              <input
                type="text"
                class="form-control "
                id="inputAddress2"
                placeholder="@instagram"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="">Facebook del establecimiento</label>
              <input
                type="text"
                class="form-control "
                id="inputAddress2"
                placeholder="@facebook"
              />
            </div>
            <div className="col-md-7">
              <label htmlFor="">Google Maps del Establecimiento</label>
              <input
                type="text"
                class="form-control "
                id="inputAddress2"
                placeholder="https://maps.app.goo.gl/FkDLmARyyp6Vgg7U6"
              />
            </div>
            <span></span>
            <div className="col-md-4">
              <label htmlFor="">Horario de Apertura</label>
              <input
                type="time"
                class="form-control "
                id="inputAddress2"
                placeholder=""
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Horario de cierre</label>
              <input
                type="time"
                class="form-control "
                id="inputAddress2"
                placeholder=""
              />
            </div>
            <div className="col-md-7">
              <label htmlFor="">Menú del establecimiento</label>
              <input
                type="file"
                class="form-control "
                id="inputAddress2"
                placeholder=""
              />
            </div>
            <div class="col-14 text-center btn-group ">
              <button type="submit" class="btn btn-primary">
                Registrarse
              </button>
              <button type="submit" class="btn btn-danger">
                Volver
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
