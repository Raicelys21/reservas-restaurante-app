import React, { useState, useEffect } from "react";
import "../../Restaurantes/CardR/Card.css";
import RestaurantCard from "../../Restaurantes/CardR/RestaurantCard";
import Modal from "./Modal";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const HomeInt = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [modalVisible, setModalVisible] = useState(false);
  const [restaurantes, setRestaurantes] = useState([]);
  const name = cookies.get("nombre") + " " + cookies.get("apellido");
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(3);
  

  const removeCookies = () => {
    cookies.remove("_id", { path: "/" });
    cookies.remove("cedula", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("correo", { path: "/" });
    cookies.remove("contrasena", { path: "/" });
    cookies.remove("tipoUsuario", { path: "/" });
  };

  useEffect(() => {
    if (cookies.get("nombre") == undefined) {
      navigate("/");
    } else {
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
    }
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

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurantes.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
            {/* <a href="Perfil" className="nav-link">
              Perfil
            </a> */}
            <a href="/HomeInt" className="nav-link">
              <p>{name}</p>
            </a>
          </div>
          <div className="nav-right-side">
            <a href="/" className="nav-link active">
              <button onClick={removeCookies} className="btn btn-success">
                Salir
              </button>
            </a>
          </div>
        </section>

        {/* <section className="app-actions">
          <form className="row g-1">
            <div className="col-m6">
              <label htmlFor="inputState2" className="form-label">
                Ciudad
              </label>
              <select id="inputState2" className="form-select">
                <option selected>Seleccionar</option>
              </select>
            </div>
          </form>
        </section> */}

        <section className="app-main">
          <div className="app-main-left cards-area">
            {currentRestaurants.map((restaurante) => (
              <div className="card-wrapper main-card" key={restaurante.id}>
                <div className="col" key={restaurante.id}>
                  <a
                    className="card cardItemjs"
                    onClick={() => openModal(restaurante)}>
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
      <nav>
        <div className="pagination center">
          {Array.from(
            { length: Math.ceil(restaurantes.length / restaurantsPerPage) },
            (_, i) => (
              <p key={i} className="page-item">
                <a onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </a>
              </p>
            )
          )}
        </div>
      </nav>

      {modalVisible && <Modal closeModal={closeM} reservaForm={reservaForm} />}
    </>
  );
};

export default HomeInt;
