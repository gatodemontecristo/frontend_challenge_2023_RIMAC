import "../styles/formularioStyle.scss";
export const Formulario = () => {
  return (
    <div className="formulario">
      <div className="formulario__texto">
        <div className="formulario__texto--tag">
          <p>Seguro Salud Flexible</p>
        </div>
        <h2 className="formulario__texto--titulo">
          Creado para ti y tu familia
        </h2>
        <h3 className="formulario__texto--subtitulo">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </h3>
      </div>

      <div className="formulario__ingreso">
        <div className="input-group">
          <select className="w-30 form-select" id="floatingSelect">
            <option value="dni" selected>
              DNI
            </option>
            <option value="pasaporte">Pasaporte</option>
          </select>
          <div className="w-70 formulario__ingreso--input form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingTextarea"
              placeholder="Username"
            />
            <label for="floatingTextarea">Nro. de documento</label>
          </div>
        </div>


        <div className="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup3"
            placeholder="Celular"
          />
          <label for="floatingInputGroup3">Celular</label>
        </div>
      </div>

      <div className="formulario__condiciones">
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Acepto lo Política de Privacidad
          </label>
        </div>
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Acepto la Política Comunicaciones Comerciales
          </label>
        </div>
        <p className="formulario__condiciones--term">
          Aplican Términos y Condiciones.
        </p>
      </div>

      <button type="button" className="formulario__btnFinal btn btn-dark">
        Cotiza aquí
      </button>
    </div>
  );
};
