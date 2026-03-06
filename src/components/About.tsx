export default function About() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}
        <div>

          {/* BADGE */}
          <span className="inline-block bg-blue-100 text-[#142B73] px-4 py-1 rounded-full text-sm font-medium mb-6">
            Sobre a empresa
          </span>

          {/* TITULO */}
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-[#142B73]">Contabilidade Federal</span>
          </h2>

          {/* TEXTO */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            A empresa nasceu com o objetivo
            de simplificar a gestão contábil e financeira, oferecendo suporte
            completo para empresas, profissionais autônomos e prestadores de serviço.
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Atuamos com tecnologia, transparência e atendimento próximo,
            ajudando nossos clientes a manterem sua organização fiscal em dia
            e a tomarem decisões mais seguras para o crescimento de suas atividades.
          </p>

          {/* NUMEROS */}
          <div className="grid grid-cols-3 gap-6">

            <div>
              <p className="text-3xl font-bold text-[#142B73]">+10</p>
              <p className="text-sm text-gray-500">anos de experiência</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#142B73]">96%</p>
              <p className="text-sm text-gray-500">satisfação dos clientes</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#142B73]">100%</p>
              <p className="text-sm text-gray-500">atendimento dedicado</p>
            </div>

          </div>

        </div>

        {/* IMAGEM */}
        <div className="relative w-fit ml-auto">

          {/* BLOCO FUNDO */}
          <div className="absolute w-[320px] h-[320px] bg-[#339BFE] rounded-2xl bottom-[-15px] right-[-15px]"></div>

          {/* IMAGEM */}
          <img
            src="/logo2.jpg"
            className="relative w-[320px] rounded-2xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  )
}