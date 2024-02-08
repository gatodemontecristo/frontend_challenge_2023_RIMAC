import { Formulario } from "../components/formulario";
import "../styles/styles.css";
export const RegistroPagina = () => {
  return (
    <div className="formulario__contenedor">
      <div className="formulario__contenedor__img">
        <img
          className="formulario__contenedor__img--family"
          src="../images/familia_bonita.png"
          alt=""
        />
      </div>
      <Formulario></Formulario>
      
      
      <img
        className="formulario__contenedor--blur01"
        src="../images/blur-asset01.png"
        alt=""
      />
      <img
        className="formulario__contenedor--blur02"
        src="../images/blur-asset02.png"
        alt=""
      />
    </div>
  );
};
