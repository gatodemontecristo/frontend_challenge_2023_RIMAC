import { useNavigate } from "react-router-dom";
import "../styles/ResumenStyless.scss";
 export const ResumenPagina = () => {

  const navigate = useNavigate();
  const onAtras = () => {
    navigate("/cotizar/planes", {
      replace: true,
    });
  };

   return (
     <div className="resumen__contenedor">
       <a className="resumen__contenedor__atras--a" onClick={onAtras}>
        <div className="resumen__contenedor__atras">
          <img
            className="resumen__contenedor__atras--icon"
            src="../images/Icon-button.png"
            alt=""
          />
          <p className="resumen__contenedor__atras--text">Volver</p>
        </div>
      </a>
        <h2 className="resumen__contenedor__titulo">Resumen del seguro</h2>
        <div className="resumen__contenedor__carta">
          <h3 className="resumen__contenedor__carta__titulo">Precios calculados para:</h3>
          <div className="resumen__contenedor__carta__mi">
          <img className="resumen__contenedor__carta__mi--img" src="../images/gl_family-24x24.png" alt="" />
          <p className="resumen__contenedor__carta__mi--nombre">Rocio Miranda Díaz</p>
          </div>
          <hr />
        </div>

     </div>
   )
 }
 