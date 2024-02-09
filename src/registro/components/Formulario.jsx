import { useNavigate } from "react-router-dom";
import { useFormulario } from "../hooks";
import "../styles/formularioStyle.scss";
import { AuthContext } from "../context";
import { useContext } from "react";
export const Formulario = () => {
  const { registrar } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    onDNIChange,
    onNumberChange,
    onTypeDocChange,
    onConditionChange1,
    onConditionChange2,
    dniValue,
    numberValue,
    typeDocValue,
    conditionValue1,
    conditionValue2,
    errorValue,
    setErrorValue
  } = useFormulario();
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !dniValue.error &&
      !numberValue.error &&
      conditionValue1 &&
      conditionValue2
    ) {
      setErrorValue(false);

      console.log("LLLEGPPPPPPPPP");
      registrar("", "","",numberValue,dniValue);
      navigate("/cotizar/planes", {
        replace: true,
      });
      

    } else {
      setErrorValue(true);
    }
  };

  
  return (
    <div className="formulario">
      <div className="formulario__texto">
      <div className="formulario__texto--cont">
      <div className="formulario__texto--cont--re">
        <div className="formulario__texto--tag">
          <p>Seguro Salud Flexible</p>
        </div>
        <h2 className="formulario__texto--titulo">
          Creado para ti y tu familia
        </h2>

        </div>
        <img
          className="formulario__texto__img--family"
          src="../images/familia_bonita.png"
          alt=""
        />
        </div>

        <hr className="formulario__texto--linea"/>

        <h3 className="formulario__texto--subtitulo">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </h3>
      </div>
      <form className="formulario__registro" onSubmit={onSubmit}>
        <div className="formulario__ingreso">
          <div className="input-group">
            <select
              className="w-30 form-select"
              id="floatingSelect"
              onChange={onTypeDocChange}
              value={typeDocValue}
            >
              <option value="dni">DNI</option>
              <option value="pasaporte">Pasaporte</option>
            </select>
            <div
              className={`w-70 formulario__ingreso--input form-floating ${
                errorValue && dniValue.error ? "is-invalid" : ""
              }`}
            >
              <input
                type="text"
                className={`form-control ${
                  errorValue && dniValue.error ? "is-invalid" : ""
                }`}
                id="floatingTextarea"
                placeholder="Username"
                onChange={onDNIChange}
                value={dniValue.documento}
              />
              <label for="floatingTextarea">Nro. de documento</label>
            </div>
            <div className="invalid-feedback">
              {typeDocValue == "dni"
                ? "Ingrese un DNI válido (8 dígitos)"
                : "Ingrese un pasaporte válido (12 dígitos)"}
            </div>
          </div>

          <div
            className={`form-floating ${
              errorValue && numberValue.error ? "is-invalid" : ""
            }`}
          >
            <input
              type="text"
              className={`form-control ${
                errorValue && numberValue.error ? "is-invalid" : ""
              }`}
              id="floatingInputGroup3"
              placeholder="Celular"
              onChange={onNumberChange}
              value={numberValue.numero}
            />
            <label for="floatingInputGroup3">Celular</label>
            <div className="invalid-feedback">
            Ingrese un número de celular válido (10 dígitos)
          </div>
          </div>
        
        </div>

        <div className="formulario__condiciones">
          <div
            className={`form-check ${
              errorValue && !conditionValue1 ? "is-invalid" : ""
            }`}
          >
            <input
              className={`form-check-input ${
                errorValue && !conditionValue1 ? "is-invalid" : ""
              }`}
              type="checkbox"
              id="flexCheckDefault"
              checked={conditionValue1}
              onChange={onConditionChange1}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Acepto lo Política de Privacidad
            </label>
            <div className="invalid-feedback">
            Debes aceptar la Política de Privacidad para continuar
          </div>
          </div>
        

          <div
            className={`form-check ${
              errorValue && !conditionValue2 ? "is-invalid" : ""
            }`}
          >
            <input
              className={`form-check-input ${
                errorValue && !conditionValue2 ? "is-invalid" : ""
              }`}
              type="checkbox"
              id="flexCheckDefault"
              checked={conditionValue2}
              onChange={onConditionChange2}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Acepto la Política Comunicaciones Comerciales
            </label>
            <div className="invalid-feedback">
            Debes aceptar la Política Comercial para continuar
          </div>
          </div>
          

          <a href="">
            <p className="formulario__condiciones--term">
              Aplican Términos y Condiciones.
            </p>
          </a>
        </div>

        <button type="submit" className="formulario__btnFinal btn btn-dark">
          Cotiza aquí
        </button>
      </form>
    </div>
  );
};
