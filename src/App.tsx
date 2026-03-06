import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import QuemSomos from "./pages/Sobre";
import AreasAtuacao from "./pages/Servicos";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/area-de-atuacao" element={<AreasAtuacao />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;