import React, { Component } from 'react'
import '../../Restaurantes/CardR/Card.css'
import RestaurantCard from '../../Restaurantes/CardR/RestaurantCard'

export default class HomeInt extends Component {
  render() {
    return (
      <div className="app-container">
        <section class="navigation">
    <a href="#" class="app-link">Travelers</a>
    <div class="navigation-links">
      <a href="#" class="nav-link ">Destinations</a>
      <a href="#" class="nav-link active">Hotels</a>
      <a href="#" class="nav-link">Camping</a>
      <a href="#" class="nav-link">Car Rent</a>
    </div>
    <div class="nav-right-side">
      <button class="mode-switch">
       <svg class="sun feather feather-sun" fill="none" stroke="#fbb046" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24"><defs/><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg class="moon feather feather-moon" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24"><defs/><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
     </button>
    </div>  
  </section>
            <section class="app-actions">
                <div class="app-actions-line">
                <div class="search-wrapper">
                    <button class="loaction-btn">
                    <svg class="btn-icon feather feather-map-pin" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    </button>
                    <input type="text" class="search-input" value="San Francisco, Stockton Street"/>
                    <button class="search-btn">Find Hotel</button>
                </div>
                </div>
            </section>
        <section className="app-main">
            <div class="app-main-left cards-area">
            <RestaurantCard/> 
            </div>
        </section>
      </div>
    )
  }
}
