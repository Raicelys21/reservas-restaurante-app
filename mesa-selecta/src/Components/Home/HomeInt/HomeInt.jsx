import React, { useState, useEffect } from "react";
import "../../Restaurantes/CardR/Card.css";
import RestaurantCard from "../../Restaurantes/CardR/RestaurantCard";
import Modal from "./Modal";
import axios from "axios";

const HomeInt = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/restaurante/restaurantes"
        );
        setRestaurantes(response.data);
      } catch (error) {
        console.error("Error al obtener restaurantes:", error);
      }
    };

    fetchRestaurantes();
  }, []);

  const [reservaForm, setReservaForm] = useState({
    nombre_restaurante: "",
    telefono: "",
    ciudad: "",
    ubicacion: "",
    cant_mesas: 0,
    num_personas: 0,
    menu: "",
    hora_apertura: "",
    hora_cierre: "",
  });

  const openModal = (restaurante) => {
    setModalVisible(true);
    let modal = document.querySelector("#modal-window");
    modal.classList.add("showModal");
    setReservaForm({
      nombre_restaurante: restaurante.nombre_restaurante,
      telefono: restaurante.telefono,
      ciudad: restaurante.ciudad,
      ubicacion: restaurante.ubicacion,
      cant_mesas: restaurante.cant_mesas,
      num_personas: restaurante.num_personas,
      menu: restaurante.menu,
      hora_apertura: restaurante.hora_apertura,
      hora_cierre: restaurante.hora_cierre,
    });

    console.log(reservaForm);
  };

  const closeM = () => {
    setModalVisible(false);
  };

  window.onclick = (event) => {
    if (event.target === document.querySelector("#modal-window")) {
      closeM();
    }
  };

  return (
    <>
      <div className="app-container">
        <section className="navigation">
          <a href="/HomeInt" className="app-link">
            Mesa Selecta
          </a>
          <div className="navigation-links">
            <a href="/misreservas" className="nav-link ">
              Mis reservas
            </a>
            <a href="/HomeInt" className="nav-link active">
              Restaurantes
            </a>
            <a href="Perfil" className="nav-link">
              Perfil
            </a>
          </div>
          <div className="nav-right-side">
            <p></p>
          </div>
        </section>

        <section className="app-actions">
          <form className="row g-1">
            <div className="col-m6">
              <label htmlFor="inputState2" className="form-label">
                Ciudad
              </label>
              <select id="inputState2" className="form-select">
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
          </form>
        </section>

        <section className="app-main">
          <div className="app-main-left cards-area">
            {restaurantes.map((restaurante) => (
              <div className="card-wrapper main-card" key={restaurante.id}>
                <div className="col" key={restaurante.id}>
                  <a className="card cardItemjs" onClick={() => openModal(restaurante)}>
                    <div className="card-image-wrapper">
                      <img
                        src={`https://source.unsplash.com/featured/1200x900/?restaurant-room,restaurant&id=${restaurante.id}`}
                        alt="Restaurante"
                      />
                    </div>
                    <div className="card-info">
                      <div className="card-text big cardText-js">
                        Nombre: {restaurante.nombre_restaurante}
                      </div>
                      <div className="card-text small">
                        Teléfono:{" "}
                        <span className="card-price">
                          {restaurante.telefono}
                        </span>
                      </div>
                      <div className="card-text small">
                        Ciudad:{" "}
                        <span className="card-price">{restaurante.ciudad}</span>
                      </div>
                      <div className="card-text small">
                        Maps:{" "}
                        <span className="card-price">
                          {restaurante.ubicacion}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {modalVisible && <Modal closeModal={closeM} reservaForm={reservaForm} />}
    </>
  );
};

export default HomeInt;
