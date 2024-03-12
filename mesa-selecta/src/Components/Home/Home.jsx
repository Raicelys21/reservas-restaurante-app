/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import './Home.css'
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
      
      <div className="content text-center">
      <p class="fs-2 fst-italic" >Haz tu reserva en restaurantes extraordinarios cercanos a ti.</p>
      </div>
    </>
  );
};

export default Home;
