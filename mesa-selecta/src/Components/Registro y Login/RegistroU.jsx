import React, { Component } from 'react'
import  './RegistroU.css'


export default class RegistroU extends Component {
  render() {
    return (
      <div>
        <header>
          Ingrese los datos para el registro
        </header>
         <form class="row g-3">


              <div class="col-md-6">
                <label for="inputAddress" class="form-label" >Cédula</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Ingrese su cédula"/>
              </div>
              <span class="d-block sm-0"/>
              <div class="col-sm">
                <label for="inputAddress" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Nombre del usuario"/>
              </div>
              <div class="col-sm">
                <label for="inputAddress" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Apellidos del usuario"/>
              </div>
              
              <span class="d-block sm-0"/>
              <div class="col-md-6">
                  <label for="inputEmail4" class="form-label" >Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Ingrese su E-mail"/>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Ingrese su Contraseña"/>
              </div>
             
              <div class="col-6">
                <label for="inputAddress2" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Ingrese su dirección"/>
              </div>


              <div class="col-md-6">
                <label for="inputCity" class="form-label">Teléfono</label>
                <input type="phone" class="form-control" id="inputPhone" placeholder="(809)-555-5555"/>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">Ciudad</label>
                <select id="inputState" class="form-select">
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

              <span class="d-block sm-0"/>
              <div class="col-2">
                <button type="submit" class="btn btn-primary center">Registrarse</button>
              </div>
              <div class="col-2">
                <button type="submit" class="btn btn-danger">Salir</button>
              </div>
          </form>
  
      </div>
    )
  }
}
