import { useNavigate } from "react-router-dom";
import "../styles/ResumenStyless.scss";
import { Pasos2 } from "../../ui/components";
import { AuthContext } from "../../registro/context";
import { useContext } from "react";
export const ResumenPagina = () => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user);

  const onAtras = () => {
    navigate("/cotizar/planes", {
      replace: true,
    });
  };

  return (
    <>
    <Pasos2></Pasos2>
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
      <div className="resumen__contenedor__carta animate__animated animate__fadeInRight">
        <h3 className="resumen__contenedor__carta__titulo">
          Precios calculados para:
        </h3>
        <div className="resumen__contenedor__carta__mi">
          <img
            className="resumen__contenedor__carta__mi--img"
            src="../images/gl_family-24x24.png"
            alt=""
          />
          <p className="resumen__contenedor__carta__mi--nombre">
          {user.name} {user.lastName}
          </p>
        </div>
        <hr className="resumen__contenedor__carta--linea"/>
        <div className="resumen__contenedor__carta__datos">
          <h3 className="resumen__contenedor__carta__datos--titulo">Responsable de pago</h3>
          <p className="resumen__contenedor__carta__datos--valor">DNI: {user.document}</p>
          <p className="resumen__contenedor__carta__datos--valor">Celular: {user.phone}</p>
        </div>
        <div className="resumen__contenedor__carta__datos">
          <h3 className="resumen__contenedor__carta__datos--titulo">Plan elegido</h3>
          <p className="resumen__contenedor__carta__datos--valor">{user.plan}</p>
          <p className="resumen__contenedor__carta__datos--valor">{user.costo}</p>
        </div>
      </div>
    </div>
    </>
  );
};
