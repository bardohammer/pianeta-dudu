import '../scss/components/Infanzia.scss';
import conigli from "../assets/images/conigliInfanzia.png"
import coniglio from "../assets/images/rabbit.png"
import Footer from "./Footer.jsx";
import { NavLink } from "react-router-dom";

const Infanzia = () => {
  return (
    <section className="infanzia">
      <section className="infanzia__section1">
        <div className="infanzia__section1__container-img">
          <img className="infanzia__section1__img" src={ conigli } alt="Immagine di una miglia di conigli"/>
        </div>
        <div className="infanzia__section1__container-text">
          <h1 className="infanzia__section1__title">Infanzia 0-3 anni</h1>
          <h2 className="infanzia__section1__subtitle-green"><span
            className="quote-green__servizi">&quot;</span>Il
            processo</h2>
          <h2 className="infanzia__section1__subtitle-serif">di crescita</h2>
          <h2 className="infanzia__section1__subtitle-green">del bambino</h2>
          <h2 className="infanzia__section1__subtitle-serif">è per noi </h2>
          <h2 className="infanzia__section1__subtitle-serif">al centro di tutto.<span
            className="quote-green__servizi">&quot;</span></h2>
          <p className="infanzia__section1__p">Pianeta dudù è un luogo attentamente progettato per favorire
            lo sviluppo delle autonomie del bambino.
            Grazie ai numerosi approfondimenti, la metodologia applicata è
            sicuramente unica ed innovativa.
            Il nostro servizio è pensato per un piccolo gruppo di bambini
            di età compresa tra i 3 e i 36 mesi.
          </p>
          <NavLink className="navlink" to="/contatti">
          <button className="infanzia__section1__button">Contattaci</button>
          </NavLink>
        </div>
      </section>
      <section className="infanzia__section2">
        <h2 className="infanzia__section2__title">I nostri obiettivi</h2>

        <div className="infanzia__section2__row">
          <div className="infanzia__section2__circle">
            <h3 className="infanzia__section2__subtitle">ATTENZIONE</h3>
            <p className="infanzia__section2__subp">
              Abbiamo scelto di lavorare con un numero ristretto di bambini per offrire una maggiore attenzione e, con
              ciò, supportare al meglio le esigenze di ogni bambino.
              I percorsi individualizzati sono “costruiti ad hoc” insieme alla psicoterapeuta ed alle educatrici.
            </p>

          </div>
          <div className="infanzia__section2__circle">
            <h3 className="infanzia__section2__subtitle">Gioco simbolico</h3>
            <p className="infanzia__section2__subp">
              Ai fini del progetto, è necessario avere uno spazio strettamente funzionale al gioco simbolico e
              maggiormente strutturato. Pianeta dudù ha degli spazi studiati appositamente per permettere ai bambini di
              avere i giusti stimoli creativi
            </p>
          </div>
          <div className="infanzia__section2__circle">
            <h3 className="infanzia__section2__subtitle">FUNZIONI CELEBRALI</h3>
            <p className="infanzia__section2__subp">

              L’obiettivo è quello di supportare adeguatamente le funzioni celebrali specifiche per ogni età con
              strumenti semplici ed efficaci come la routine, il gioco e le attività ludico creative
            </p>
          </div>
        </div>
      </section>
      <section className="infanzia__section3">
        <div className="infanzia__section3__container-text">
          <h2 className="infanzia__section3__subtitle-green"><span
            className="quote-green__servizi">&quot;</span>Il
            cibo <span className="infanzia__section3__subtitle-green--edit">è</span> una vera scoperta,</h2>
          <h2 className="infanzia__section3__subtitle-serif">e se è vero che siamo quello</h2>
          <h2 className="infanzia__section3__subtitle-green">che mangiamo,</h2>
          <h2 className="infanzia__section3__subtitle-serif">è importante </h2>
          <h2 className="infanzia__section3__subtitle-serif">mangiare solo cose genuine.<span
            className="quote-green__servizi">&quot;</span></h2>
          <p className="infanzia__section3__p">L’alimentazione proposta da Pianeta Dudù è attentamente supervisionata da un’esperta
            nutrizionista infantile, la dott.ssa Arianna Mazzoni.
            È stato individuato per i nostri bambini un piano alimentare sano e variegato, questo va
            dallo svezzamento ad un’alimentazione più globale e completa.
            L’obiettivo è quello di gustare sapori diversi ogni giorno e di introdurre pian piano gli
            alimenti indispensabili alla crescita del bambino.
          </p>
        </div>
        <div className="infanzia__section3__container-img">
          <img className="infanzia__section3__img" src={ coniglio } alt="Immagine di una miglia di conigli"/>
        </div>

      </section>
      <section className="infanzia__section4">
        <h2 className="infanzia__section4__title">Orari e servizi</h2>
        <h3 className="infanzia__section4__subtitle-serif">Dal lunedì al venerdì</h3>
        <h3 className="infanzia__section4__subtitle-serif">offriamo un servizio comprensivo di pranzo e nanna.</h3>
        <h4 className="infanzia__section4__subtitle-green">Si puo' scegliere tra diversi orari di uscita:</h4>


        <div className="infanzia__section4__row">
          <div className="infanzia__section4__circle">
            <h3 className="infanzia__section4__subtitle">Prima opzione:</h3>
            <p className="infanzia__section4__subp">
              12/12:15
            </p>
            <p className="infanzia__section4__subp">(Senza pranzo)</p>
          </div>
          <div className="infanzia__section4__circle">
            <h3 className="infanzia__section4__subtitle">Seconda opzione:</h3>
            <p className="infanzia__section4__subp">
              13/13:15
            </p>
            <p className="infanzia__section4__subp">(Con pranzo)</p>
          </div>
          <div className="infanzia__section4__circle">
            <h3 className="infanzia__section4__subtitle">Terza opzione:</h3>
            <p className="infanzia__section4__subp">
              15.15/15:30
            </p>
            <p className="infanzia__section4__subp">(Con pranzo e nanna)</p>
          </div>
        </div>
      </section>
      <Footer/>

    </section>
)
}

export default Infanzia;