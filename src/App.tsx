import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import QuemSomos from "./pages/Sobre";
import AreasAtuacao from "./pages/Servicos";
import Contato from "./pages/Contato";
import ScrollToTop from "./components/ScrollToTop";
import WhatsappButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/area-de-atuacao" element={<AreasAtuacao />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>

      <WhatsappButton />

      <Footer />

    </BrowserRouter>
  );
}

export default App;