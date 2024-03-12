/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./ChooseUser.css";
import cliente from "../../../assets/Cliente.png";
import negocio from "../../../assets/Negocio.png";
import { Link } from "react-router-dom";


export default class ChooseUserType extends Component {
  render() {
    return (
      <div className="center">
        <div className="ContenedorCh">
          <h3 className="text-center">No estás registrado. ¡Regístrate!</h3>
          <br />
          <h4 className="text-center">¿Qué tipo de usuario eres?</h4>
          <br />
          <form action="" className="row g-3">
            <div className="center">
              <div className="col-md-4 text-center divi">
                <label htmlFor="" className="form-label">
                  Cliente
                </label>
                <Link to="/registrou">
                  <img src={cliente} alt="" className="imagen" />
                </Link>
              </div>
              <div className="col-md-4 text-center content-center divi">
                <label htmlFor="" className="form-label">
                  Restaurante
                </label>
                <Link to="/restauranteregistro">
                  <img src={negocio} alt="" className="imagen" />
                </Link>
              </div>
            </div>
            <span></span>
            <div className="col-md-12 text-center content-center">
              <h4 className="text-center">¿Tienes una cuenta? </h4>
              <Link to="/login">
              <button className="btn btn-md btn-danger text-center ">
                {" "}
                Iniciar sesión
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
