/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import './Home.css'
import Food from "../../../assets/Food.jpg";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="h3">
              <Link to="/">Mesa Selecta</Link>
            </li>
            <div className="botones">
              <li>
                <button className="btn"><Link to="/Type">Registrarse</Link></button>
              </li>
              <li>
                <button className="btn"> <Link to="/Login">Iniciar Sesión</Link></button>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <div className="content001 text-center" style={{height: "100vh",backgroundImage: `url(${Food})`}}>
        <p className="fs-2 fst-italic" style={{fontSize: "60px", color: "white"}}>Haz tu reserva en restaurantes extraordinarios cercanos a ti.</p>
      </div>
    </>
  );
};

export default Home;
