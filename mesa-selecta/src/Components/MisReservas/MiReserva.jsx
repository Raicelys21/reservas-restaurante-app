import React, {useState, useEffect} from "react";
import axios  from "axios";
const MiReserva = () => {


  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reservas/reservas');
        setReservas(response.data); 
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservas(); 
  }, []); 

    return (
 <>
<div className="app-container">
        <section class="navigation">
          <a href="/HomeInt" class="app-link">
            Mesa Selecta
          </a>
          <div class="navigation-links">
            <a href="/misreservas" class="nav-link active">
              Mis reservas
            </a>
            <a href="/HomeInt" class="nav-link ">
              Restaurantes
            </a>
            <a href="Perfil" class="nav-link">
              Perfil
            </a>
          </div>
          <div class="nav-right-side">
            <p></p>
          </div>
        </section>

        <section class="app-actions"></section>

        <section className="app-main">
          <table>
            <thead>
              <tr>
                <th>Código Restaurante</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha</th>
                <th>Horario</th>
                <th>Cantidad Personas</th>
                <th>Cantidad Mesas</th>
                <th>Comentario</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva._id}>
                  <td>{reserva.cod_usuario}</td>
                  <td>{reserva.cod_restaurante}</td>
                  <td>{reserva.nombre}</td>
                  <td>{reserva.apellido}</td>
                  <td>{reserva.fecha}</td>
                  <td>{reserva.horario}</td>
                  <td>{reserva.cant_personas}</td>
                  <td>{reserva.cant_mesas}</td>
                  <td>{reserva.comentario}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </section>

      </div>
 </>
    );
  }


export default MiReserva;