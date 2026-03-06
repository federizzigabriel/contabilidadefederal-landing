import { Instagram, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#142B73] text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO + REDES */}
        <div>

          <img
            src="/logo.png"
            alt="Contabilidade Federal"
            className="h-12 mb-6"
          />

          <p className="text-blue-200 mb-6">
            Soluções contábeis modernas para profissionais,
            autônomos e empresas que desejam crescer com segurança.
          </p>

          <div className="flex gap-4">

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#339BFE] rounded-full hover:bg-[#339BFE] transition"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#339BFE] rounded-full hover:bg-[#339BFE] transition"
            >
              <Instagram size={18} />
            </a>

          </div>

        </div>


        {/* INSTITUCIONAL */}
        <div>

          <h4 className="text-lg font-semibold mb-5 text-[#339BFE]">
            Institucional
          </h4>

          <ul className="space-y-3 text-blue-200">

            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/quem-somos" className="hover:text-white transition">
                Quem somos
              </Link>
            </li>

            <li>
              <Link to="/area-de-atuacao" className="hover:text-white transition">
                Serviços
              </Link>
            </li>

            <li>
              <Link to="/contato" className="hover:text-white transition">
                Contato
              </Link>
            </li>

          </ul>

        </div>


        {/* SERVIÇOS */}
        <div>

          <h4 className="text-lg font-semibold mb-5 text-[#339BFE]">
            Serviços
          </h4>

          <ul className="space-y-3 text-blue-200">

            <li>Abertura de CNPJ</li>
            <li>Contabilidade mensal</li>
            <li>Planejamento tributário</li>
            <li>Regularização de empresas</li>
            <li>Consultoria contábil</li>

          </ul>

        </div>


        {/* CONTATO */}
        <div>

          <h4 className="text-lg font-semibold mb-5 text-[#339BFE]">
            Fale conosco
          </h4>

          <ul className="space-y-4 text-blue-200">

            <li className="flex items-center gap-2">
              <MessageCircle size={18} />
              (00) 00000-0000
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} />
              contato@contabilidadefederal.com
            </li>

          </ul>

        </div>

      </div>


      {/* BARRA FINAL */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-blue-200 text-sm">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p>
            © {new Date().getFullYear()} Contabilidade Federal — Todos os direitos reservados.
          </p>

          <p className="hover:text-white cursor-pointer">
            Política de Privacidade
          </p>

        </div>

      </div>

    </footer>
  );
}