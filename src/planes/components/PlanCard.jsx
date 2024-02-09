import { PlanItem } from "./PlanItem"

export const PlanCard = (propiedades) => {
  return (
    <div className="planes__contenedor__plan__card">
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
          <p className="planes__contenedor__plan__card__titulo__dato--antes">
            $99 antes
          </p>
          <p className="planes__contenedor__plan__card__titulo__dato--despues">
            ${propiedades.price} al mes
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
            <PlanItem  key={i} texto={texto}></PlanItem>
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
      <button className="planes__contenedor__plan__card__titulo--btn btn btn-danger">
      Seleccionar Plan
    </button>
    </div>
   
  </div>
  )
}
