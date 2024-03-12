/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Mesa Selecta</Link>
            </li>
            <div className="botones">
              <li>
                <Link to="/Type">Registrarse</Link>
              </li>
              <li>
                <Link to="">Iniciar Sesión</Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Home;
