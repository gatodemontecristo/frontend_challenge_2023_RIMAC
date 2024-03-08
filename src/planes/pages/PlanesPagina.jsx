import { useContext, useEffect, useState } from "react";
import "../styles/PlanesStyles.scss";
import "../styles/PlanesSpinner.css";
import {  useFetchUser } from "../hook";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../registro/context";
import { PlanCard } from "../components";
import { getPlans } from "../helpers/getPlans";
import { Pasos } from "../../ui/components";
export const PlanesPagina = () => {
  const [opcionMiValue, setOpcionMiValue] = useState(false);
  const [opcionAlguienValue, setOpcionAlguienValue] = useState(false);
  const [realizar, setRealizar] = useState(true);

  const onOpcionMiChange = () => {
    if (!opcionMiValue) {
      setOpcionMiValue(!opcionMiValue);
      setOpcionAlguienValue(false);
      setRealizar(false);
      setplanesColeccion(planes.filter(plan => plan.age > edadlimite));
    }
  };
  const onOpcionAlguienChange = () => {
    if (!opcionAlguienValue) {
      setOpcionAlguienValue(!opcionAlguienValue);
      setOpcionMiValue(false);
      setRealizar(false);

      setplanesColeccion(planes.filter(plan => plan.age < edadlimite));
    }
  };

  const { usuario, isLoading } = useFetchUser();
  // const { planes,isLoading2 } = useEffect(useFetchPlans();

  // console.log(planes);

  const [planes, setplanes] = useState([]);
  const [isLoading2, setIsLoading] = useState(true);
  const [planesColeccion, setplanesColeccion] = useState([]);

  const getPlanes = async () => {
    const planesArreglo = await getPlans();
    setplanes(planesArreglo);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanes();
  }, []);


  

  const { actualizar, salir } = useContext(AuthContext);
  
  useEffect(() => {
    actualizar( usuario.name, usuario.lastName, usuario.birthDay);
  }, [usuario]);

  //
 
const obtenerEdad =(dateString)=>{
  var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
const edadlimite = obtenerEdad(usuario.birthDay);
// console.log(getAge("02-04-1990"));

  const navigate = useNavigate();
  const onAtras = () => {
    salir();
    navigate("/registro", {
      replace: true,
    });
  };

  return (
    <>
    <Pasos></Pasos>
    <div className="planes__contenedor">
      <a className="planes__contenedor__atras--a" onClick={onAtras}>
        <div className="planes__contenedor__atras">
          <img
            className="planes__contenedor__atras--icon"
            src="../images/Icon-button.png"
            alt=""
          />
          <p className="planes__contenedor__atras--text">Volver</p>
        </div>
      </a>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="planes__contenedor__opciones">
          <div className="planes__contenedor__opciones__texto">
            <h2 className="planes__contenedor__opciones__texto--titulo">
              {usuario.name} ¿Para quién deseas cotizar?
            </h2>
            <p className="planes__contenedor__opciones__texto--subtitulo">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>
          <div className="planes__contenedor__opciones__persona">
            <a
              onClick={onOpcionMiChange}
              className="planes__contenedor__opciones__persona--a animate__animated animate__fadeInRight"
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
                  Cotiza tu seguro de salud y agrega familiares si así lo
                  deseas.
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
              className="planes__contenedor__opciones__persona--a animate__animated animate__fadeInRight"
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
      )}

      {isLoading2 ? (
        <span className="loader"></span>
      ) : (
        <div
          className={`planes__contenedor__plan  ${realizar ? "collapse " : ""}`}
        >
          
           {planesColeccion.map((propiedades, i) => (
            <PlanCard key={i} propiedades={propiedades} opcionMiValue={opcionMiValue}></PlanCard>
          ))}



        </div>
      )}
    </div>
    </>
  );
};
