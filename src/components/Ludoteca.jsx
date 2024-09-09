import '../scss/components/Ludoteca.scss';
import condivisione from "../assets/images/condivisione.png"
import fungo from "../assets/images/fungo.png"
import Footer from "./Footer.jsx";
import { NavLink } from "react-router-dom";

const Ludoteca = () => {
  return (
    <section className="ludoteca">
      <section className="ludoteca__section1">
        <div className="ludoteca__section1__container-text">
          <h1 className="ludoteca__section1__title">ludoteca 0-10 anni</h1>
          <h2 className="ludoteca__section1__subtitle-green"><span
            className="quote-white">&quot;</span>La
            felicita'</h2>
          <h2 className="ludoteca__section1__subtitle-serif">della condivisione rende</h2>
          <h2 className="ludoteca__section1__subtitle-serif">l'atmosfera del gioco</h2>
          <h2 className="ludoteca__section1__subtitle-green">semplicemente </h2>
          <h2 className="ludoteca__section1__subtitle-green">magica.<span
            className="quote-white">&quot;</span></h2>
          <p className="ludoteca__section1__p">Pianeta dudù ha anche il servizio ludoteca, uno spazio a misura di bambino ideato per
            facilitare la socializzazione e il gioco tra i piccoli ospiti.
            I laboratori pomeridiani della nostra ludoteca sono attentamente divisi in base alla fascia
            d’età, questo per garantire ai bambini di vivere momenti di gioco ed esperienze uniche in
            compagnia dei loro coetanei.
          </p>
          <NavLink className="navlink" to="/contatti">
          <button className="ludoteca__section1__button">Contattaci</button>
          </NavLink>
        </div>
        <div className="ludoteca__section1__container-img">
          <img className="ludoteca__section1__img" src={ condivisione } alt="Immagine di una famiglia di conigli"/>
        </div>
      </section>

      <section className="ludoteca__section2">
        <h2 className="ludoteca__section2__title">Laboratorio</h2>

        <div className="ludoteca__section2__row">
          <div className="ludoteca__section2__div">
            <h3 className="ludoteca__section2__div__subtitle">Esperienze emotive</h3>
            <p className="ludoteca__section2__div__subp">
              La filosofia di Pianeta Dudù è quella di permettere ai bambini di vivere delle esperienze
              emotive, sensoriali e cognitive consone alla loro età, per questo i laboratori pomeridiani
              della nostra ludoteca saranno suddivisi attentamente in base alle competenze emotive e
              cognitive dei vostri bambini.
            </p>

          </div>
          <img className="ludoteca__section2__img" src={ fungo } alt="Immagine di una miglia di conigli"/>
          <div className="ludoteca__section2__div2">
            <h3 className="ludoteca__section2__div2__subtitle">I nostri giochi</h3>
            <p className="ludoteca__section2__div2__subp">
              I giochi utilizzati nei nostri laboratori sono scelti con cura, l’obiettivo è quello di
              incoraggiare le attività cognitive ed emotive quindi: il pensiero logico, la risoluzione ai
              problemi, l’apprendimento ludico, il riconoscimento ed il rispecchiamento emotivo.
              I nostri giocattoli sono per lo più artigianali e si distinguono per la loro maneggevolezza,
              l’attenzione ai particolari ed all’ergonomia.
            </p>
          </div>
        </div>
      </section>

      <section className="ludoteca__section3">
        <h2 className="ludoteca__section3__title">Orari e servizi</h2>
        <h3 className="ludoteca__section3__subtitle-serif">Dal lunedì al venerdì</h3>
        <h3 className="ludoteca__section3__subtitle-serif">offriamo un servizio con attività di vari tipi</h3>
        <h4 className="ludoteca__section3__subtitle-green">La nostra programmazione settimanale:</h4>


        <div className="ludoteca__section3__row">
          <div className="ludoteca__section3__circle--double">
            <h3 className="ludoteca__section3__subtitle">Lunedi e <br/>mercoledi:</h3>
            <p className="ludoteca__section3__subp">
              Laboratorio con la presenza di un genitore per bambini 0-18 mesi dalle 16.30 alle 18.30
            </p>
          </div>
          <div className="ludoteca__section3__circle">
            <h3 className="ludoteca__section3__subtitle">Martedi:</h3>
            <p className="ludoteca__section3__subp">
              Laboratorio strutturato bambini 2-4 anni dalle 16.30 alle 18.30
            </p>
          </div>
          <div className="ludoteca__section3__circle">
            <h3 className="ludoteca__section3__subtitle">Giovedi:</h3>
            <p className="ludoteca__section3__subp">
              Laboratorio strutturato per bambini 5-10 anni dalle 16.30 alle 18.30
            </p>
          </div>
          <div className="ludoteca__section3__circle">
            <h3 className="ludoteca__section3__subtitle">Venerdi:</h3>
            <p className="ludoteca__section3__subp">
              Gioco libero bambini 2-4 anni dalle 16.30 alle 18.30
            </p>
          </div>
        </div>
      </section>
    <Footer/>
    </section>
  )
}

export default Ludoteca;