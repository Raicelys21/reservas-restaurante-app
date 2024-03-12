import React, { Component } from 'react'
import './Card.css'
import negocio from '../../../../assets/Negocio.png'

export default class RestaurantCard extends Component {
  render() {
    return (
      <div>
        <div class="card" >
                <img src={negocio} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Nombre_Restaurant</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <strong> Teléfono</strong>
                        {/* {telefono} */}
                    </li>
                    <li class="list-group-item">
                        <strong> Ubicación</strong>

                    </li>
                    <li class="list-group-item">
                        <strong> An item</strong>
                    </li>
                </ul>
                <div class="card-body text-center">
                    <a href="#" class="card-link">Ver más</a>
                    <a href="#" class="card-link">Menú</a>
                </div>
            </div>
      </div>
    )
  }
}
