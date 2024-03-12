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
import Login from "./Components/Registro y Login/Login"
import Home from "./Components/Home/Home";
import HomeInt from "./Components/Home/HomeInt/HomeInt";
import RestaurantCard from "./Components/Restaurantes/CardR/RestaurantCard";
import MiReserva from "./Components/MisReservas/MiReserva";
import Perfil from "./Components/PerfilUsuario/Perfil";

export const URL = "http://localhost:5000/api";

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
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/RestaurantCard" element={<RestaurantCard/>}/>
            <Route path="/HomeInt" element={<HomeInt/>}/>
            <Route path="/Misreservas" element={<MiReserva/>}/>
            <Route path="/Perfil" element={<Perfil/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
