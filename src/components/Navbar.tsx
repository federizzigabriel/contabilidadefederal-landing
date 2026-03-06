import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-[#142B73] text-white sticky top-0 z-50 shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Contabilidade Federal"
            className="h-10"
          />
        </Link>

        {/* MENU */}
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

        {/* DIREITA */}
        <div className="flex items-center gap-5">

          {/* CTA */}
          <Link to="/contato">
            <button className="bg-[#3B82F6] px-6 py-2 rounded-lg font-semibold hover:bg-[#60A5FA] transition">
              Falar com especialista
            </button>
          </Link>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition"
          >
            <Instagram size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition"
          >
            <MessageCircle size={20} />
          </a>

        </div>

      </div>

    </header>
  );
}