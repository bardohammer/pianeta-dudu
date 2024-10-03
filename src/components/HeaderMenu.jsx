import { NavLink } from "react-router-dom";
import '../scss/components/Header.scss';
import logo from "../assets/images/Logo_1_Livello.png";
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'; // Importa l'hamburger da hamburger-react
// Cross, Divide, Fade, Pivot, Rotate, Slant, Sling, Spin, Spiral, Squash, Squeeze, Turn, Twirl
const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Stato per gestire il menu

  const handleMenuClick = () => {
    // Chiudi il menu
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const isMobile = window.innerWidth <= 600; // Controlla se siamo su un dispositivo mobile

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <NavLink to="/">
            <img src={logo} alt="Logo Pianeta Dudù" className="header__logo-img" />
          </NavLink>
        </div>
        <div className="header__hamburger">
          <Hamburger color="#41521F" toggled={isOpen} toggle={setIsOpen} size={24} />
        </div>
        {/* Mostra il menu normale per schermi grandi */}
        {!isMobile && (
          <ul className="header__menu">
            <li className="header__menu-item">
              <NavLink
                to="/chi-siamo"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Chi siamo
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/pianeta-dudu"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Pianeta Dudu&apos;
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/infanzia"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Infanzia
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/ludoteca"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Ludoteca
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/contatti"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Contatti
              </NavLink>
            </li>
          </ul>
        )}
      </nav>

      {/* Overlay del menu, solo se il menu è aperto e ci troviamo su un dispositivo mobile */}
      {isOpen && isMobile && (
        <div className={ `header__overlay ${ isOpen ? 'show' : 'exit' }` }>
          <ul className="header__menu">
            <li className="header__menu-item">
              <NavLink
                to="/chi-siamo"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Chi siamo
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/pianeta-dudu"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Pianeta Dudu&apos;
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/infanzia"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Infanzia
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/ludoteca"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Ludoteca
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                to="/contatti"
                className={({ isActive }) => isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"}
                onClick={handleMenuClick}
              >
                Contatti
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;
