import { Formulario1 } from "../components/Formulario1";
import "../styles/registroStyles.scss";
export const RegistroPagina = () => {
  return (
    <div className="formulario__contenedor">
      <div className="formulario__contenedor__img animate__animated animate__fadeInLeft">
        <img
          className="formulario__contenedor__img--family"
          src="../images/familia_bonita.png"
          alt=""
        />
      </div>
      <Formulario1></Formulario1>
      
      
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
