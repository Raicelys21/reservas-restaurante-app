/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './ChooseUser.css'
import cliente from '/assets/Cliente.png'
import negocio from '/assets/Negocio.png'

export default class ChooseUserType extends Component {
  render() {
    return (
      <div>
        <div className="ContenedorCh">
            <h1 className="text-center">¿Qué tipo de usuario eres?</h1>
        <form action="" className="row g-3">
                
                <div className="col-md-6 text-center divi">
                    <label htmlFor="" className="form-label">Cliente</label>
                    <img src={cliente} alt="" className="imagen" />
                </div>
                <div className="col-md-6 text-center content-center divi">
                    <label htmlFor="" className="form-label">Restaurante</label>
                    <img src={negocio} alt="" className="imagen" />
                </div>
                <span></span>
                <div className="col-md-12 text-center content-center">
                    <button className="btn btn-md btn-danger text-center "> Salir</button>
                </div>
            </form>
        </div>
           
      </div>
    )
  }
}
