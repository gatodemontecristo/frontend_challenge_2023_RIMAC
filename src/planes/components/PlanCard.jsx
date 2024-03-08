import { useNavigate } from "react-router-dom";
import { PlanItem } from "./PlanItem";
import { AuthContext } from "../../registro/context";
import { useContext } from "react";

export const PlanCard = ({ propiedades, opcionMiValue }) => {
  const navigate = useNavigate();

  const { seleccionar } = useContext(AuthContext);
  const onResumen = () => {
    seleccionar(propiedades.name,`$${calculoDesc()} al mes`);
    navigate("/cotizar/resumen");
  };
  const calculoDesc = () => {
    if (!opcionMiValue) {
      return propiedades.price * (0.95).toFixed(2);
    } else {
      return propiedades.price;
    }
  };
  return (
    <div className="planes__contenedor__plan__card animate__animated animate__fadeIn">
      <div className="planes__contenedor__plan__card--tag">
        <p>Plan recomendado</p>
      </div>

      <div className="planes__contenedor__plan__card__titulo">
        <div className="planes__contenedor__plan__card__titulo__dato">
          <h3 className="planes__contenedor__plan__card__titulo__dato--cabecera">
            {propiedades.name}
          </h3>
          <div className="planes__contenedor__plan__card__titulo__dato--pre">
            <p className="planes__contenedor__plan__card__titulo__dato--ti">
              Costo del plan
            </p>
            <p
              className={`planes__contenedor__plan__card__titulo__dato--antes  ${
                opcionMiValue ? "collapse " : ""
              }`}
            >
              ${propiedades.price} antes
            </p>

            <p className="planes__contenedor__plan__card__titulo__dato--despues">
              ${calculoDesc()} al mes
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
          {propiedades.description.map((texto, i) => (
            <PlanItem key={i} texto={texto}></PlanItem>
          ))}

          {/* <li className="planes__contenedor__plan__card__lista--li">
          Consultas en clínica para cualquier especialidad.
        </li>
        <li className="planes__contenedor__plan__card__lista--li">
          Medicinas y exámenes derivados cubiertos al 80%{" "}
        </li>
        <li className="planes__contenedor__plan__card__lista--li">
          Atención médica en más de 200 clínicas del país.
        </li> */}
        </ul>
      </div>
      <button className="planes__contenedor__plan__card__titulo--btn btn btn-danger" onClick={onResumen}>
        Seleccionar Plan
      </button>
    </div>
  );
};
