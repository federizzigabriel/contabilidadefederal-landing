import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#142B73] text-white sticky top-0 z-50 shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* PRIMEIRA LINHA */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img
              src="/logo.png"
              alt="Contabilidade Federal"
              className="h-8 md:h-10"
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 font-medium">

            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>

            <Link to="/quem-somos" className="hover:text-blue-200 transition">
              Sobre
            </Link>

            <Link to="/area-de-atuacao" className="hover:text-blue-200 transition">
              Serviços
            </Link>

            <Link to="/contato" className="hover:text-blue-200 transition">
              Contato
            </Link>

          </nav>

          {/* DIREITA DESKTOP */}
          <div className="hidden md:flex items-center gap-5">

            <Link to="/contato">
              <button className="bg-[#3B82F6] px-6 py-2 rounded-lg font-semibold hover:bg-[#60A5FA] transition">
                Falar com especialista
              </button>
            </Link>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <Instagram size={20}/>
            </a>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <MessageCircle size={20}/>
            </a>

          </div>

          {/* BOTÃO MENU MOBILE */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28}/> : <Menu size={28}/>}
          </button>

        </div>

        {/* MOBILE CTA + ICONES */}
        <div className="md:hidden mt-4 flex items-center justify-between gap-3">

          <Link to="/contato">
            <button className="bg-[#3B82F6] px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
              Área do Cliente
            </button>
          </Link>

          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={22}/>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={22}/>
            </a>

          </div>

        </div>

      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-[#142B73] px-6 pb-6 flex flex-col gap-4">

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/quem-somos" onClick={() => setOpen(false)}>
            Sobre
          </Link>

          <Link to="/area-de-atuacao" onClick={() => setOpen(false)}>
            Serviços
          </Link>

          <Link to="/contato" onClick={() => setOpen(false)}>
            Contato
          </Link>

        </div>
      )}

    </header>
  );
}