import React from "react";

const Modal = ({closeM, reservaForm }) => {

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
                  <a href={reservaForm.menu} target="_blank">href={reservaForm.menu}</a>
                  <span>Google Map</span>
                  <a href={reservaForm.ubicacion} target="_blank">{reservaForm.ubicacion}</a>
                </div>
                <div className="desc-actions">
                  <button className="btn btn-primary">Reservar</button>
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
