/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Components/Registro y Login/Login";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Reserva from "./Components/Reserva/Reserva";
import RegistroU from "./Components/Registro y Login/RegistroU";
import RestaurantesRegistro from "./Components/Restaurantes/RestaurantesRegistro";
import ChooseUserType from "./Components/Registro y Login/ChooseUserType";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Type" element={<ChooseUserType />} />
            <Route path="/Reserva" element={<Reserva />} />
            <Route path="/RegistroU" element={<RegistroU />} />
            <Route path="/RestauranteRegistro" element={<RestaurantesRegistro />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
