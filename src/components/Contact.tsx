import { Mail, MessageCircle, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-12 md:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* TITULO */}
        <div className="text-center mb-10">

          <div className="flex flex-col items-center mb-4">

            <h2 className="text-3xl md:text-4xl font-semibold text-[#142B73]">
              Fale conosco
            </h2>

            <div className="w-16 md:w-20 h-1 bg-[#339BFE] mt-4 rounded-full"></div>

          </div>

          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Nosso atendimento é 100% remoto. Entre em contato e descubra
            como a{" "}
            <span className="font-semibold text-[#142B73]">
              Contabilidade Federal
            </span>{" "}
            pode ajudar você ou sua empresa.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* FORMULARIO */}
          <div>

            <p className="text-base md:text-lg font-semibold text-[#142B73] mb-4">
              Preencha o formulário
            </p>

            <form className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-lg space-y-5">

              <div>
                <label className="text-sm text-gray-600">Nome</label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-200 rounded-lg px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#142B73]"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 border border-gray-200 rounded-lg px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#142B73]"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full mt-1 border border-gray-200 rounded-lg px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#142B73]"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#339BFE] text-white py-3 rounded-lg font-semibold hover:bg-[#4AA8FF] transition"
              >
                Enviar mensagem
              </button>

            </form>

          </div>

          {/* CONTATOS */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-6">

            {/* WHATSAPP */}
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-gray-200 hover:shadow-md transition">

              <div className="bg-[#142B73]/10 text-[#142B73] p-3 rounded-lg">
                <MessageCircle size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-gray-600 text-sm md:text-base">
                  (00) 00000-0000
                </p>
              </div>

            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-gray-200 hover:shadow-md transition">

              <div className="bg-[#142B73]/10 text-[#142B73] p-3 rounded-lg">
                <Mail size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600 text-sm md:text-base">
                  contato@contabilidadefederal.com
                </p>
              </div>

            </div>

            {/* INSTAGRAM */}
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-gray-200 hover:shadow-md transition">

              <div className="bg-[#142B73]/10 text-[#142B73] p-3 rounded-lg">
                <Instagram size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">Instagram</p>
                <p className="text-gray-600 text-sm md:text-base">
                  @contabilidadefederal
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}