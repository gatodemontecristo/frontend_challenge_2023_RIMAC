import "../styles/footerStyles.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contenedor ">
        <img className="footer__contenedor--img" src="../images/logo_black.png" alt="" />
        <hr className="footer__contenedor--linea"/>
        <div className="footer__contenedor__texto">
          <p className="footer__contenedor__texto--chico">© 2023 RIMAC Seguros y Reaseguros.</p>
          
        </div>
      </div>
    </footer>
  );
};
