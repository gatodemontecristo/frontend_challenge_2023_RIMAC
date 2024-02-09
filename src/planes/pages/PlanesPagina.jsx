import { useState } from "react";
import "../styles/PlanesStyles.scss";
export const PlanesPagina = () => {
  const [opcionMiValue, setOpcionMiValue] = useState(false);
  const [opcionAlguienValue, setOpcionAlguienValue] = useState(false);

  const onOpcionMiChange = () => {
    if (!opcionMiValue) {
      setOpcionMiValue(!opcionMiValue);
      setOpcionAlguienValue(false);
    }
  };
  const onOpcionAlguienChange = () => {
    if (!opcionAlguienValue) {
      setOpcionAlguienValue(!opcionAlguienValue);
      setOpcionMiValue(false);
    }
  };

  return (
    <div className="planes__contenedor">
      <a className="planes__contenedor__atras--a" href="">
        <div className="planes__contenedor__atras">
          <img
            className="planes__contenedor__atras--icon"
            src="../images/Icon-button.png"
            alt=""
          />
          <p className="planes__contenedor__atras--text">Volver</p>
        </div>
      </a>

      <div className="planes__contenedor__opciones">
        <div className="planes__contenedor__opciones__texto">
          <h2 className="planes__contenedor__opciones__texto--titulo">
            Rocío ¿Para quién deseas cotizar?
          </h2>
          <p className="planes__contenedor__opciones__texto--subtitulo">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        <div className="planes__contenedor__opciones__persona">
          <a
            onClick={onOpcionMiChange}
            className="planes__contenedor__opciones__persona--a"
          >
            <div
              className={`planes__contenedor__opciones__persona--card ${
                opcionMiValue
                  ? "planes__seleccion--marco"
                  : "planes__seleccion--sombra"
              }`}
            >
              <div className="planes__contenedor__opciones__persona--card--head">
                <img
                  className="planes__contenedor__opciones__persona--card--img"
                  src="../images/IcProtectionLight.png"
                  alt=""
                />
                <h3 className="planes__contenedor__opciones__persona--card--titulo">
                  Para mi
                </h3>
              </div>
              <p className="planes__contenedor__opciones__persona--card--subtitulo">
                Cotiza tu seguro de salud y agrega familiares si así lo deseas.
              </p>

              <div className="planes__contenedor__opciones__persona--card--check form-check">
                <input
                  className="form-check-option-edit form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checked={opcionMiValue}
                  onChange={onOpcionMiChange}
                />
              </div>
            </div>
          </a>
          <a
            onClick={onOpcionAlguienChange}
            className="planes__contenedor__opciones__persona--a"
          >
            <div
              className={`planes__contenedor__opciones__persona--card ${
                opcionAlguienValue
                  ? "planes__seleccion--marco"
                  : "planes__seleccion--sombra"
              }`}
            >
              <div className="planes__contenedor__opciones__persona--card--head">
                <img
                  className="planes__contenedor__opciones__persona--card--img"
                  src="../images/IcAddUserLight.png"
                  alt=""
                />
                <h3 className="planes__contenedor__opciones__persona--card--titulo">
                  Para alguien más
                </h3>
              </div>
              <p className="planes__contenedor__opciones__persona--card--subtitulo">
                Realiza una cotización para uno de tus familiares o cualquier
                persona.
              </p>

              <div className="planes__contenedor__opciones__persona--card--check  form-check">
                <input
                  className="form-check-option-edit form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checked={opcionAlguienValue}
                  onChange={onOpcionAlguienChange}
                />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="planes__contenedor__plan">
        <div className="planes__contenedor__plan__card">
          <div className="planes__contenedor__plan__card--tag">
            <p>Plan recomendado</p>
          </div>

          <div className="planes__contenedor__plan__card__titulo">
            <div className="planes__contenedor__plan__card__titulo__dato">
              <h3 className="planes__contenedor__plan__card__titulo__dato--cabecera">
                Plan en Casa y Clínica
              </h3>
              <div className="planes__contenedor__plan__card__titulo__dato--pre">
                <p className="planes__contenedor__plan__card__titulo__dato--ti">
                  Costo del plan
                </p>
                <p className="planes__contenedor__plan__card__titulo__dato--antes">
                  $99 antes
                </p>
                <p className="planes__contenedor__plan__card__titulo__dato--despues">
                  $94.05 al mes
                </p>
              </div>
            </div>

            <img
              className="planes__contenedor__plan__card__titulo--img"
              src="../images/IcHospitalLight.png"
              alt=""
            />
          </div>

          <hr className="planes__contenedor__plan__card__titulo--linea" />

          <div className="planes__contenedor__plan__card__lista">
            <ul className="planes__contenedor__plan__card__lista--ul">
              <li className="planes__contenedor__plan__card__lista--li">
                Consultas en clínica para cualquier especialidad.
              </li>
              <li className="planes__contenedor__plan__card__lista--li">
                Medicinas y exámenes derivados cubiertos al 80%{" "}
              </li>
              <li className="planes__contenedor__plan__card__lista--li">
                Atención médica en más de 200 clínicas del país.
              </li>
            </ul>
            <button className="planes__contenedor__plan__card__titulo--btn btn btn-danger">
            Seleccionar Plan
          </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};
