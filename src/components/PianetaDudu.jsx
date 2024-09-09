import '../scss/components/PianetaDudu.scss';
import Footer from "./Footer.jsx";


const PianetaDudu = () => {
  return (
    <section className="pianeta">
      <h1 className="pianeta__title">Pianeta dudu'</h1>
      <section className="pianeta__section1">
        <h2 className="pianeta__section1__subtitle-green"><span
          className="quote-pink">&quot;</span>Ogni bambino</h2>
        <h2 className="pianeta__section1__subtitle-serif">è per noi unico e speciale... La sua famiglia?</h2>
        <h2 className="pianeta__section1__subtitle-green">L'alleata perfetta</h2>
        <h2 className="pianeta__section1__subtitle-serif">per prenderci cura di lui.<span
          className="quote-pink">&quot;</span></h2>
      </section>

      <section className="pianeta__section2">
      <p className="pianeta__section2__p">
          <strong>Pianeta Dudù</strong> è un luogo attentamente progettato per accogliere i bambini nelle attività
          ludiche offrendo quindi un servizio <strong>infanzia 0-3 anni</strong> e una <strong>ludoteca
          pomeridiana</strong>.<br/><br/>
          Inoltre è spazio di formazione ed informazione: con esperti del settore, vorremo fornire al
          nostro territorio un servizio di divulgazione rispetto a temi molto attuali e caldi come:
          l’<strong>addormentamento autonomo</strong> ed il <strong>sonno dei bambini</strong>,
          l’<strong>allattamento</strong> e il <strong>processo
          di crescita</strong>, la <strong>gravidanza</strong> e <strong>il parto</strong>, l’<strong>importanza del
          massaggio infantile</strong> e <strong>la
          relazione genitore-figlio</strong>.<br/><br/>
          La nostra filosofia è quella di accompagnare i genitori alla <strong>“piena conoscenza”</strong> dei loro
          bambini, perché ognuno ha esigenze specifiche ma tutti loro sono accomunati da
          momenti di <strong>“criticità”</strong>, e per affrontare al meglio queste fasi è indispensabile averne
          consapevolezza.<br/><br/>
          Per sostenere al meglio la genitorialità ed il percorso dei primi 3 anni di vita del bambino,
          sarà possibile accedere allo sportello di ascolto settimanale che verrà effettuato dalla
          <strong> dott.ssa Linda Frongillo</strong>.
        </p>

      </section>
      <Footer/>
    </section>
  )
}

export default PianetaDudu;