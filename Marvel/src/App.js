import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Cabecalho from "./components/Navbar/Cabecalho";
import About from "./components/About";
import HeroDetails from "./components/HeroDetails.jsx";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Logo from'./components/Images/marvel.jpg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
          <img src={Logo} style={{ width: '100%',  height: '170px'}}/>
      <Navbar Cabecalho={<Cabecalho text={""} />}>
        <NavItem to={"/"} text={"Home"} />
        <NavItem to={"/about"} text={"About"} />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
      < Footer />
    </Router>
  );
}
export default App;