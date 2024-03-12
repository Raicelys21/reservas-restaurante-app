/* eslint-disable no-unused-vars */

import React from 'react'; // Make sure to import React
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Components/Registro y Login/Login';
import Reserva from './Components/Reserva/Reserva';
import RegistroU from './Components/Registro y Login/RegistroU';
import RestaurantesRegistro from './Components/Restaurantes/RestaurantesRegistro';
import ChooseUserType from './Components/Registro y Login/ChooseUserType';

function App() {
  return (
    <>
      {/* <ChooseUserType /> */}
      <Reserva/>
    </>
  );
}

export default App;
