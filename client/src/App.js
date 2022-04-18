import "./App.css";
import { Route, Routes } from "react-router-dom";

//rutas
import Home from "./components/Home/Home";
import Navegation from "./components/Navegation/Navegation";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navegacion" element={<Navegation />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
