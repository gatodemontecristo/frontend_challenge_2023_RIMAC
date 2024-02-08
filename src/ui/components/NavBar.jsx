import "../styles/navStyles.scss";

export const NavBar = () => {
  return (
    <nav >
      <div className="navbar__contenedor ">
        <img className="navbar__contenedor--img" src="../images/logo_white.png" alt="" />
        <div className="navbar__contenedor__texto">
          <p className="navbar__contenedor__texto--chico">¡Compra por este medio!</p>
          <img className="navbar__contenedor__texto--img" src="../images/GlTelephoneSolid.png " alt="" />
          <p className="navbar__contenedor__texto--num">(01) 411 6001</p>
        </div>
      </div>
    </nav>
  );
};
