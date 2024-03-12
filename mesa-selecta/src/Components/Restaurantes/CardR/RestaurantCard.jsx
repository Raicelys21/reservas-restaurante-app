import React, { Component } from 'react'
import './Card.css'
import negocio from '../../../../assets/Negocio.png'

export default class RestaurantCard extends Component {
  render() {
    return (

          <div>
            <div class="card-wrapper main-card">
        <a class="card cardItemjs"  onclick="openModal()">
          <div class="card-image-wrapper">
          <img src="https://source.unsplash.com/featured/1200x900/?hotel-room,hotel" alt="Hotel"/>
        </div>
          <div class="card-info">
            <div class="card-text big cardText-js">Nombre del Restaurante</div>
            <div class="card-text small">
              Teléfono
              <span class="card-price"> $1300</span>
            </div>
            <div class="card-text small">
              Dirección: 
              <span class="card-price"> $1300</span>
            </div>
          </div>
          </a>
      </div>
          </div>
      // <div>
      //   <div class="card" >
      //           <img src={negocio} class="card-img-top" alt="..."/>
      //           <div class="card-body">
      //               <h5 class="card-title">Nombre_Restaurant</h5>
      //           </div>
      //           <ul class="list-group list-group-flush">
      //               <li class="list-group-item">
      //                   <strong> Teléfono</strong>
      //                   {/* {telefono} */}
      //               </li>
      //               <li class="list-group-item">
      //                   <strong> Ubicación</strong>

      //               </li>
      //               <li class="list-group-item">
      //                   <strong> An item</strong>
      //               </li>
      //           </ul>
      //           <div class="card-body text-center">
      //               <a href="#" class="card-link">Ver más</a>
      //               <a href="#" class="card-link">Menú</a>
      //           </div>
      //       </div>
            
      // </div>
    )
  }
}
