import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeM, reservaForm }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [totalPersonas, setTotalPersonas] = useState(0);
  const [totalMesas, setTotalMesas] = useState(0);
  const [showData, setShowData] = useState(false);

  const fetchReservasPorFecha = async (fecha, cod_res) => {
    const dataFecha = {
      cod_restaurante: cod_res,
      fecha: fecha,
    };

    console.log(dataFecha);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/reservas/reservas/restaurante",
        dataFecha
      );

      let personasTotales = 0;
      let mesasTotales = 0;

      response.data.forEach((reserva) => {
        personasTotales += parseInt(reserva.cant_personas);
        mesasTotales += parseInt(reserva.cant_mesas);
      });

      setTotalPersonas(personasTotales);
      setTotalMesas(mesasTotales);

      setShowData(true);

      const timeoutId = setTimeout(() => {
        setShowData(false);
      }, 10000);
    } catch (error) {
      setTotalPersonas(0);
      setTotalMesas(0);
      setShowData(true);

      const timeoutId = setTimeout(() => {
        setShowData(false);
      }, 10000);
      console.error("Error al obtener reservas por fecha:", error);
    }
  };

  const [revForm, setResForm] = useState({
    fecha: "",
    horario: "",
    cant_personas: "",
    cant_mesas: "",
    comentario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const enviarReserva = async () => {
    try {
      const personasDisponibles = reservaForm.num_personas - totalPersonas;
      const mesasDisponibles = reservaForm.cant_mesas - totalMesas;

      // Verificar si hay suficientes personas y mesas disponibles
      if (
        revForm.cant_personas > personasDisponibles ||
        revForm.cant_mesas > mesasDisponibles
      ) {
        alert("No hay suficientes personas o mesas disponibles.");
        return;
      }

      const requestBody = {
        cod_usuario: cookies.get("cedula"),
        cod_restaurante: reservaForm.nombre_restaurante,
        nombre: cookies.get("nombre"),
        apellido: cookies.get("apellido"),
        fecha: revForm.fecha,
        horario: revForm.horario,
        cant_personas: revForm.cant_personas,
        cant_mesas: revForm.cant_mesas,
        comentario: revForm.comentario,
      };
      if (
        requestBody.cod_usuario &&
        requestBody.cod_restaurante &&
        requestBody.nombre &&
        requestBody.apellido &&
        requestBody.fecha &&
        requestBody.horario &&
        requestBody.cant_personas &&
        requestBody.cant_mesas !== ""
      ) {
        await axios.post(
          "http://localhost:5000/api/reservas/reservas",
          requestBody
        );

        var data = {
          service_id: "service_vw210tv",
          template_id: "template_7pzvf3o",
          user_id: "BXAzsRPbpYBlBmJ8C",
          template_params: {
            nombre: cookies.get("nombre"),
            apellido: cookies.get("apellido"),
            correo: cookies.get("correo"),
            lugar: requestBody.cod_restaurante,
            horario: requestBody.horario,
            fecha: requestBody.fecha,
            personas: requestBody.cant_personas,
            mesas: requestBody.cant_mesas,
          },
        };

        axios
          .post("https://api.emailjs.com/api/v1.0/email/send", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            alert("Your mail is sent!");
          })
          .catch((error) => {
            alert("Oops... " + JSON.stringify(error));
          });

        let modal = document.querySelector("#modal-window");
        modal.classList.remove("showModal");
      } else {
        alert("Completa todos los campos.");
      }
    } catch (error) {
      console.error("Error al crear la reserva:", error);
    }
  };

  return (
    <div id="modal-window" className="shadow">
      <div className="main-modal">
        <div className="modal-left">
          <div className="modal-image-wrapper">
            <img src="https://source.unsplash.com/featured/1200x900/?design,hotel" />
          </div>
          <div className="modal-info-header">
            <div className="left-side">
              <h1 className="modalHeader-js"></h1>
            </div>
            <div className="right-side">
              <h3>{reservaForm.nombre_restaurante}</h3>
            </div>
          </div>
          <br />

          <div className="info-bar">
            <div className="info-wrapper">
              <div className="info-icon">
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <span>{reservaForm.ciudad}</span>
            </div>
            <div className="info-wrapper">
              <div className="info-icon">
                <svg
                  className="btn-icon feather feather-wind"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                </svg>
              </div>
              <span>Telefono: {reservaForm.telefono}</span>
            </div>
            <div className="info-wrapper">
              <div className="info-icon">
                <svg
                  className="btn-icon feather feather-square"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </div>
              <span>Cantidad de mesas: {reservaForm.cant_mesas}</span>
            </div>
            <div className="info-wrapper">
              <div className="info-icon">
                <svg
                  className="btn-icon feather feather-shield"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>Numero de personas: {reservaForm.num_personas}</span>
            </div>
          </div>
          <div className="desc-wrapper">
            <div className="modal-info-header">
              <span>Enlace menu</span>
              <a href={reservaForm.menu} target="_blank">
                href={reservaForm.menu}
              </a>
              <span>Google Map</span>
              <a href={reservaForm.ubicacion} target="_blank">
                {reservaForm.ubicacion}
              </a>
            </div>
            <br />

            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="inputDate" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"
                  name="fecha"
                  value={revForm.fecha}
                  onChange={(e) => {
                    handleChange(e);
                    fetchReservasPorFecha(
                      e.target.value,
                      reservaForm.nombre_restaurante
                    );
                  }}
                  placeholder="YYYY-MM-DD"
                />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="inputTime" className="form-label">
                  Horario
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="inputTime"
                  name="horario"
                  value={revForm.horario}
                  onChange={handleChange}
                  placeholder="HH:MM"
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="inputGuests" className="form-label">
                  Cantidad de Personas
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputGuests"
                  name="cant_personas"
                  value={revForm.cant_personas}
                  onChange={handleChange}
                  placeholder="Número de personas"
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="inputTables" className="form-label">
                  Cantidad de Mesas
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputTables"
                  name="cant_mesas"
                  value={revForm.cant_mesas}
                  onChange={handleChange}
                  placeholder="Número de mesas"
                />
              </div>
            </div>

            <div className="row">
              {showData && (
                <div>
                  <p>
                    <strong>Total de personas disponibles:</strong>{" "}
                    {reservaForm.num_personas - totalPersonas}
                  </p>
                  <p>
                    <strong>Total de mesas disponibles:</strong>{" "}
                    {reservaForm.cant_mesas - totalMesas}
                  </p>
                </div>
              )}
            </div>

            <div className="row">
              <div className="col-md-12 mb-12">
                <label htmlFor="inputDate" className="form-label">
                  Comentario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDate"
                  name="comentario"
                  value={revForm.comentario}
                  onChange={handleChange}
                  placeholder="Detalles"
                />
              </div>
            </div>

            <div className="desc-actions">
              <button
                className="btn btn-primary"
                onClick={() => enviarReserva()}>
                Reservar
              </button>
              <div className="add-favourite">
                <input type="checkbox" id="favourite" />
                <label htmlFor="favourite">
                  <span className="favourite-icon">
                    <svg
                      className="btn-icon feather feather-heart"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>
                  <span>Favorito</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
