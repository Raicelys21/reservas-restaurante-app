import React, { Component } from 'react'
import './ChooseUser.css'
import cliente from 'C:/Users/rony1/Desktop/App-Reserva/reservas-restaurante-app/mesa-selecta/assets/Cliente.png'
import negocio from 'C:/Users/rony1/Desktop/App-Reserva/reservas-restaurante-app/mesa-selecta/assets/Negocio.png'

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
            </form>
        </div>
           
      </div>
    )
  }
}
