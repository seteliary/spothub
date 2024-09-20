import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login";
import Details from "./Details";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detalhes-pi" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
