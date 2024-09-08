import '../scss/components/Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer__info--container">
        <div className="footer__info">
          <h3 className="footer__info--title">link utili</h3>
          <NavLink className="navlink" to="/pianeta-dudu">
          <p className="footer__info--p">Pianeta dudù</p>
          </NavLink>
          <NavLink className="navlink" to="/chi-siamo">
          <p className="footer__info--p">Chi siamo</p>
          </NavLink>
          <NavLink className="navlink" to="/contatti">
          <p className="footer__info--p">Contatti</p>
          </NavLink>
        </div>
        <div className="footer__info">
          <h3 className="footer__info--title">servizi</h3>
          <NavLink className="navlink" to="/infanzia">
          <p className="footer__info--p">Infanzia</p>
          </NavLink>
          <NavLink className="navlink" to="/ludoteca">
          <p className="footer__info--p">Ludoteca</p>
          </NavLink>
        </div>
        <div className="footer__info">
          <h3 className="footer__info--title">Contatti</h3>
          <NavLink className="navlink" to="/contatti">
          <p className="footer__info--p"><FontAwesomeIcon className="footer__info--icon" icon={ faHouse }/>Via Marrucci N°20, Cecina, LI</p>
          </NavLink>
          <NavLink className="navlink" to="/contatti">
          <p className="footer__info--p"><FontAwesomeIcon className="footer__info--icon"
                                                          icon={ faEnvelope }/> pianetadudu2024@gmail.com</p>
          </NavLink>
          <NavLink className="navlink" to="/contatti">
          <p className="footer__info--p"><FontAwesomeIcon className="footer__info--icon" icon={ faPhone }/> +39 3930209000</p>
          </NavLink>
        </div>
        <div className="footer__info">
          <h3 className="footer__info--title">Follow Us</h3>
          <div className="footer__info--row">
            <a href="https://www.instagram.com/pianetadudu/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="footer__icon" icon={ faInstagram } size="2x"/>
            </a>
            <a href="https://wa.me/3930209000" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="footer__icon" icon={ faWhatsapp } size="2x"/>
            </a>
          </div>
        </div>
      </section>
      <section className="footer__copyright">
        <p className="footer__copyright--p">© Copyright 2024- Powered by IlBardoHammer.</p>
      </section>
    </div>
  )
}

export default Footer;