import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import '../scss/components/Contatti.scss';
import Footer from "./Footer.jsx";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const Contatti = () => {
  return (
    <section className="contact">
      <h1 className="contact__h1">Contatti</h1>
      <div className="contact__row">
        <div className="contact__box">
          <div className="contact__title--container">
            <h3 className="contact__title em"><FontAwesomeIcon className="contact__icon" size="xs"
                                                               icon={ faEnvelope }/>Email
            </h3>
          </div>
          <p className="contact__p">
            <a className="contact__a" href="mailto:nicchecala@gmail.com">pianetadudu2024@gmail.com</a>

          </p>
        </div>
        <div className="contact__box">
        <div className="contact__title--container">
            <h3 className="contact__title tel"><FontAwesomeIcon className="contact__icon" size="xs" icon={ faPhone }/>Telefono
            </h3>
          </div>
          <p className="contact__p">
            <a className="contact__a" href="tel:+39 393 0209 000">
              +39 393 0209 000
            </a>
          </p>
        </div>
        <div className="contact__box">
          <div className="contact__title--container">
            <h3 className="contact__title lug"><FontAwesomeIcon className="contact__icon" size="xs"
                                                                icon={ faLocationDot }/>Location
            </h3>
          </div>
          <p className="contact__p">
            <a className="contact__a" href="https://www.google.com/maps/place/Via+Marrucci+N%C2%B020,+Cecina,+LI" target="_blank" rel="noopener noreferrer">
              Via Marrucci N°20, Cecina, LI
            </a>
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contatti;