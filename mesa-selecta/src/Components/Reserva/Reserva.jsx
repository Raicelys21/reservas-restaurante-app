/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Reserva.css";

const ReservaComp = () => {
    const [cantidad, setCantidad] = useState(1);

    const handlerReducir = () => {
      if (cantidad > 1) {
        setCantidad((c) => c - 1);
      }
    };
    
    const handlerAumentar = () => {
      setCantidad((c) => c + 1);
    };
    
  return (
    <>
      <div className="contenedor">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Reserva tu mesa</h2>
            {/* <div className="tabs">
              <button className="btn" disabled={false}>
                fecha
              </button>
              <button className="btn" disabled={false}>
                hora
              </button>
              <button className="btn" disabled={false}>
                comensales
              </button>
              <button className="btn btn-success" disabled={false}>
                confirmacion
              </button>
            </div> */}
          </div>
          <div className="card-body">
            <div className="contenido">
              <div className="tab1 card p-2">
                <h5 className="card-title">Fecha de la reserva</h5>
                <input type="date" className="text-dark calendar"></input>
              </div>
              <div className="tab2 card p-2">
                <h5 className="card-title">Qué hora te va mejor?</h5>
                <div className="row">
                  <div className="col btn-group-vertical">
                    <button className="btn">1:00 PM</button>
                    <button className="btn">2:00 PM</button>
                    <button className="btn">3:00 PM</button>
                    <button className="btn">4:00 PM</button>
                  </div>
                  <div className="col btn-group-vertical">
                    <button className="btn">7:00 PM</button>
                    <button className="btn">8:00 PM</button>
                    <button className="btn">9:00 PM</button>
                    <button className="btn">10:00 PM</button>
                  </div>
                </div>
              </div>
              <div className="tab3 card p-2">
                <h5 className="card-title">
                  Para cuantas personas es la reserva?
                </h5>
                <div className="cantidadPer">
                  <button className="btn btn-secondary" onClick={handlerReducir}>-</button>
                  <h4>{cantidad}</h4>
                  <button className="btn btn-primary" onClick={handlerAumentar}>+</button>
                </div>
              </div>
              <div className="tab4">
                <button className="btn btn-success">Reservar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservaComp;
