<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './ChooseUser.css'
import cliente from '../../../assets/Cliente.png'
import negocio from '../../../assets/Negocio.png'
=======
import React, { Component } from "react";
import "./ChooseUser.css";
import cliente from "../../../assets/Cliente.png";
import negocio from "../../../assets/Negocio.png";
>>>>>>> 22e8e96aa36ce5a465b5998684888e19a3ace359


export default class ChooseUserType extends Component {
  render() {
    return (
      <div className="center">
        <div className="ContenedorCh">
          <h1 className="text-center">¿Qué tipo de usuario eres?</h1>
          <form action="" className="row g-3">
            <div className="center">
              <div className="col-md-4 text-center divi">
                <label htmlFor="" className="form-label">
                  Cliente
                </label>
                <img src={cliente} alt="" className="imagen" />
              </div>
              <div className="col-md-4 text-center content-center divi">
                <label htmlFor="" className="form-label">
                  Restaurante
                </label>
                <img src={negocio} alt="" className="imagen" />
              </div>
            </div>
            <span></span>
            <div className="col-md-12 text-center content-center">
              <button className="btn btn-md btn-danger text-center ">
                {" "}
                Salir
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
