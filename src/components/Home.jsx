import Card from "./Card.jsx";

import copertina from "../assets/images/copertina.png"
import '../scss/components/Home.scss';
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleClickInfanzia = () => {
    navigate('/infanzia');
  }

  const handleClickLudoteca = () => {
    navigate('/ludoteca');
  }

  return (
    <div className="home">
      <h1 className="home__font-one">Benvenuti</h1>
      <h2 className="home__font-two"><br/>nel Pianeta Dudù... <br/>Che servizio <br/>stai cercando?</h2>
      <div className="home__container-foto">
        <img className="home__background" src={ copertina } alt="Foto bambini di sfondo"/>

      </div>
      <section className="home__row-card">
        <Card onClick={handleClickInfanzia} title="Infanzia 0-3 anni" className="home__card">
          Pianeta dudù ha degli spazi studiati appositamente per permettere ai bambini di avere i
          giusti stimoli per sviluppare la loro creatività e fantasia.
        </Card>
        <Card onClick={handleClickLudoteca} title="Ludoteca 0-10 anni" className="home__card">
          Pianeta dudù ha anche il servizio ludoteca, uno spazio a misura di bambino ideato per
          facilitare la socializzazione e il gioco tra i piccoli ospiti.
        </Card>
      </section>
      <Footer/>
    </div>

  )
}

export default Home;
//
