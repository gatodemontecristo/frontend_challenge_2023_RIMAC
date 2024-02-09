import { useNavigate } from "react-router-dom";
import "../styles/pasosStyles.scss";
import { useContext } from "react";
import { AuthContext } from "../../registro/context";

export const Pasos2 = () => {
  const navigate = useNavigate();
  const { salir } = useContext(AuthContext);
  const onAtras = () => {
    salir();
    navigate("/registro", {
      replace: true,
    });
  };
  
  return (
    <div className="pasos__progreso">
      <div className="pasos__progreso__contenedor">
        <button className="pasos__progreso--2 btn btn-outline-secondary" type="button">
          1
        </button>
        <p className="pasos__progreso--resumen">Planes y coberturas</p>
        <p className="pasos__progreso--points">....</p>
        <button
          className="pasos__progreso--1 btn btn-primary"
          type="button"
        >
          2
        </button>
        <p className="pasos__progreso--plans">Resumen</p>
      </div>


      
      
    </div>
  );
};
