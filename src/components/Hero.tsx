export default function Hero() {
  return (
    <section className="relative h-[700px] overflow-hidden text-white">

      {/* IMAGEM DE FUNDO */}
      <img
        src="/hero.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY AZUL */}
      <div className="absolute inset-0 bg-[#142B73]/80"></div>

      {/* CONTEÚDO */}
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">

        <div className="max-w-xl">

          <h1 className="text-5xl lg:text-5xl font-bold leading-tight mb-6">
            Contabilidade Federal: estratégica para empresas que querem crescer
          </h1>

          <p className="text-lg text-blue-100 mb-10">
            Reduza impostos, organize sua empresa e tenha controle financeiro completo com especialistas.
          </p>

          <div className="flex gap-4">

            <button className="bg-blue-500 px-7 py-3 rounded-xl font-semibold hover:bg-blue-400 transition">
              Abrir empresa
            </button>

            <button className="border border-white/30 px-7 py-3 rounded-xl hover:bg-white/10 transition">
              Falar com especialista
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}