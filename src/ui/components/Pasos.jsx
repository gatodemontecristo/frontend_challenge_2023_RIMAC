import { useNavigate } from "react-router-dom";
import "../styles/pasosStyles.scss";
import { useContext } from "react";
import { AuthContext } from "../../registro/context";

export const Pasos = () => {
  const navigate = useNavigate();
  const { salir } = useContext(AuthContext);
  const onAtras = () => {
    salir();
    navigate("/registro");
  };

  return (
    <div className="pasos__progreso">
      <div className="pasos__progreso__contenedor">
        <button className="pasos__progreso--1 btn btn-primary" type="button">
          1
        </button>
        <p className="pasos__progreso--plans">Planes y coberturas</p>
        <p className="pasos__progreso--points">....</p>
        <button
          className="pasos__progreso--2 btn btn-outline-secondary"
          type="button"
        >
          2
        </button>
        <p className="pasos__progreso--resumen">Resumen</p>
      </div>


      
      <div className="pasos__progreso__bar">
      <a className="pasos__progreso__bar--a" onClick={onAtras}>
        <img
          className="pasos__progreso__bar--icon"
          src="../images/Icon-button.png"
          alt=""
        />
        </a>
        <p className="pasos__progreso__bar--texto">PASO 1 DE 2</p>
        <div className="pasos__progreso__bar--progress">        
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "10%" }}></div>
        </div>
        </div>

      </div>
    </div>
  );
};
