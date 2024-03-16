import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MiR.css";
import Cookies from "universal-cookie";

const MiReserva = () => {
  const cookies = new Cookies();
  const [reservas, setReservas] = useState([]);
  const name = cookies.get("nombre") + " " + cookies.get("apellido");

  const removeCookies = () => {
    cookies.remove("_id", { path: "/" });
    cookies.remove("cedula", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("correo", { path: "/" });
    cookies.remove("contrasena", { path: "/" });
    cookies.remove("tipoUsuario", { path: "/" });
    
  };

  const handleDeleteReserva = async (id) => {
    try {
      await axios.delete(
        "http://localhost:5000/api/reservas/reservas/" + id.toString()
      );
      // Volver a obtener la lista de reservas después de eliminar
      const response = await axios.get(
        "http://localhost:5000/api/reservas/reservas/codigo/" +
          cookies.get("cedula").toString()
      );
      setReservas(response.data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };


  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/reservas/reservas/codigo/" +
            cookies.get("cedula").toString()
        );
        setReservas(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservas();
  }, []);

  return (
    <>
      <div className="app-container">
      <section className="navigation">
          <a href="/HomeInt" className="app-link">
            Mesa Selecta
          </a>
          <div className="navigation-links">
            <a href="/misreservas" className="nav-link active">
              Mis reservas
            </a>
            <a href="/HomeInt" className="nav-link ">
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
              <button href="/" onClick={removeCookies} className="btn btn-success">
                Salir
              </button>
            </a>
          </div>
        </section>

        <section class="app-actions"></section>

        <section className="app-main">
          <table>
            <thead>
              <tr>
                <th>Restaurante</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha</th>
                <th>Horario</th>
                <th>Cantidad Personas</th>
                <th>Cantidad Mesas</th>
                <th>Comentario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva._id}>
                  <td>{reserva.cod_restaurante}</td>
                  <td>{reserva.nombre}</td>
                  <td>{reserva.apellido}</td>
                  <td>{reserva.fecha}</td>
                  <td>{reserva.horario}</td>
                  <td>{reserva.cant_personas}</td>
                  <td>{reserva.cant_mesas}</td>
                  <td>{reserva.comentario}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteReserva(reserva._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30">
                        <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default MiReserva;
