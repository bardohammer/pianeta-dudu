import '../scss/components/Card.scss';


const Card = ({ img, title, children, className, buttonClassName, onClick}) => {
  return (
    <div className={`card ${className || ''}`}>
      <img className="card__img" src={ img } alt=""/>
      <h3 className="card__title">{ title }</h3>
      <p className="card__p">
        { children }
      </p>
      <button onClick={onClick} className={`card__button ${buttonClassName || ''}`}>Scopri di più</button>
    </div>
  )
}

export default Card;
