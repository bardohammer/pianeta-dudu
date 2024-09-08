import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderMenu from "./components/HeaderMenu.jsx";
import Infanzia from "./components/Infanzia.jsx";
import Ludoteca from "./components/Ludoteca.jsx";
import Contatti from "./components/Contatti.jsx";
import ChiSiamo from "./components/ChiSiamo.jsx";
import PianetaDudu from "./components/PianetaDudu.jsx";
import Home from "./components/Home.jsx";
import "/src/scss/Main.scss";
import ScrollToTop from "./components/ScrollToTop.jsx";
const App = () => {
  return (
  <Router>
    <ScrollToTop />
    <HeaderMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/pianeta-dudu" element={<PianetaDudu />} />
      <Route path="/infanzia" element={<Infanzia />} />
      <Route path="/ludoteca" element={<Ludoteca />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
  </Router>
  )
}

export default App;