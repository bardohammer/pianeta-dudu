import '../scss/components/ChiSiamo.scss';
import Footer from "./Footer.jsx";

const ChiSiamo = () => {
  return (
    <section className="chi-siamo">
      <h1 className="chi-siamo__title">Chi siamo</h1>
      <section className="chi-siamo__section1">
        <h2 className="chi-siamo__section1__subtitle-green"><span
          className="quote-green">&quot;</span><span className="chi-siamo__section1__subtitle-green--edit">è </span>
          soltanto giocando che</h2>
        <h2 className="chi-siamo__section1__subtitle-serif">il bambino esprime il suo vero sè,</h2>
        <h2 className="chi-siamo__section1__subtitle-green">noi adulti siamo privilegiati</h2>
        <h2 className="chi-siamo__section1__subtitle-serif">nel vedere la crescita della sua fantasia.<span
          className="quote-green">&quot;</span></h2>
      </section>

      <section className="chi-siamo__section2">
      <p className="chi-siamo__section2__p">
          <strong>Pianeta Dudù</strong> è un progetto che nasce dall'incontro del cuore di <strong>Benedetta</strong> e
          quello di <strong>Linda</strong>.<br/><br/>
          Un'educatrice ed una psicoterapeuta, due attente osservatrici che, con grande spirito di squadra, hanno dato
          forma a quella che fino a poco tempo fa era soltanto una fantasia.<br/><br/>
          Il personale è composto da <strong>due educatrici</strong>, Benedetta e Sara, che si prenderanno cura dei
          bambini per il
          tempo che trascorreranno nella struttura, e <strong>un'assistente all'infanzia </strong>
          che fornirà il giusto supporto alla gestione quotidiana dei bambini presenti nella
          struttura.<br/><br/>
          Inoltre, l'aspetto strutturale ed organizzativo del servizio è gestito dalla <strong>dott.ssa Linda
          Frongillo</strong> che sarà
          presente anche per alcune ore settimanali ad osservare il gioco libero e strutturato dei bambini.
        </p>

      </section>

      <section className="chi-siamo__section3">
        <h2 className="chi-siamo__section3__title">Il nostro Team</h2>
        <div className="chi-siamo__section3__container">

          <div className="chi-siamo__section3__container__card">
            <h3 className="chi-siamo__section3__container__title">Benedetta Pallecchi</h3>
            <h4 className="chi-siamo__section3__container__subtitle">Educatrice professionale</h4>
            <p className="chi-siamo__section3__container__p">Laureata a pieni voti in <strong>Scienze dell’Educazione e della
              Formazione</strong>, nella sezione specifica
              di Educatrice professionale per l’inclusione della disabilità e del disagio giovanile
              (Università di degli studi di Firenze).<br/><br/>
              Inoltre, da 9 anni sono volontaria presso l’associazione <strong>Oliveraccendeunsorriso</strong>, nella
              quale svolgo l’attività di Clowterapia nel reparto di pediatria dell’ospedale di Cecina.
              La terapia del sorriso è un insieme di attività ludico ricreative in ambito sanitario che
              permettono di trasformare le emozioni negative in positive.<br/><br/>
              Infine, negli ultimi anni ho avuto modo di lavorare con la <strong>prima infanzia</strong> andando a
              formarmi sempre di più su quelli che sono i bisogni e le tappe fondamentali di questa
              specifica fascia d’età, che per me rappresenta una scoperta e un punto di partenza.
            </p>
          </div>

          <div className="chi-siamo__section3__container__card">
            <h3 className="chi-siamo__section3__container__title">Dott.ssa Linda Frongillo</h3>
            <h4 className="chi-siamo__section3__container__subtitle">Psicologa e Psicoterapeuta</h4>
            <p className="chi-siamo__section3__container__p">
              Laureata a pieni voti in <strong>Psicologia clinica e della salute</strong> all’Università Vita Salute San
              Raffaele di Milano.<br/><br/>
              Successivamente, ho conseguito la specializzazione in <strong>Psicoterapia psicoanalitica</strong>  presso
              l’istituto di psicoterapia del bambino e dell’adolescente di Milano, PSIBA.
              Ho maturato molte conoscenze nel settore infantile con esperienze e metodi specifici
              come <strong>l’infant observation</strong>.<br/><br/>
              Ho lavorato nel reparto di <strong>pediatria</strong>, nell’area di psicopatologia dello sviluppo e nel
              reparto di disturbi alimentari dell’Ospedale San Raffaele di Milano, questo mi ha
              permesso di maturare conoscenze in un settore molto ampio e strutturato come quello
              ospedaliero.<br/><br/>
              Negli ultimi anni, ho conseguito inoltre la qualifica di <strong>Consulente del sonno</strong> in età
              pediatrica.
            </p>
          </div>

          <div className="chi-siamo__section3__container__card">
            <h3 className="chi-siamo__section3__container__title">Sara Falchi</h3>
            <h4 className="chi-siamo__section3__container__subtitle">Educatrice professionale</h4>
            <p className="chi-siamo__section3__container__p">
              Laureata a pieni voti in <strong>scienze dell’educazione sociale</strong> all’università di Firenze,
              inoltre ho approfondito i miei studi sulla <strong>disabilità intellettiva</strong> ed in particolare sul
              disturbo dello spettro dell’autismo,
              maturando delle competenze specifiche anche in questo ambito.<br/><br/>
              Grazie alle numerose esperienze in ambito infantile, ho potuto osservare ciò che mi ha da sempre
              incuriosita:
              il <strong>funzionamento socio-emotivo del bambino nella sua complessità</strong>.<br/><br/>
              Mi piace osservare i bambini e le loro <strong>fasi evolutive</strong>,
              costruire con loro dei percorsi adeguatamente scelti per supportare le loro abilità ma anche le
              difficoltà.<br/><br/>
              Infatti, per questo ho scelto con cura e passione i miei indirizzi di studio e specializzazione,
              continuando tutt’oggi la formazione richiesta e lavorando a stretto contatto con il mio team.
            </p>
          </div>
        </div>

      </section>
      <Footer/>
    </section>
  )

}

export default ChiSiamo;