export default function ServicesDescription() {

  const services = [
    {
      title: "Abertura de CNPJ",
      description: [
        "Abrir um CNPJ é o primeiro passo para atuar como profissional PJ ou formalizar um negócio com segurança jurídica.",
        "A Contabilidade Federal cuida de todo o processo de abertura da empresa, desde o enquadramento tributário até o registro nos órgãos competentes.",
        "Com um processo totalmente digital e atendimento remoto, seu CNPJ pode estar pronto para operar rapidamente."
      ],
      image: "/service1.png"
    },

    {
      title: "Contabilidade mensal",
      description: [
        "A contabilidade mensal garante que todas as obrigações fiscais e contábeis da sua empresa estejam em dia.",
        "Nossa equipe realiza o acompanhamento completo do seu CNPJ, incluindo apuração de impostos e envio de declarações obrigatórias.",
        "Assim você pode focar no seu trabalho enquanto cuidamos da parte contábil."
      ],
      image: "/service2.png"
    },

    {
      title: "Planejamento tributário",
      description: [
        "O planejamento tributário permite reduzir a carga de impostos de forma legal e estratégica.",
        "Analisamos sua atividade e regime fiscal para identificar a estrutura tributária mais eficiente.",
        "Com uma estratégia bem definida, sua empresa paga apenas o necessário."
      ],
      image: "/service3.png"
    },

    {
      title: "Organização financeira",
      description: [
        "A organização financeira é essencial para entender os resultados da sua atividade.",
        "Auxiliamos no controle de receitas, despesas e fluxo de caixa para trazer mais clareza sobre sua situação financeira.",
        "Isso permite decisões mais estratégicas para o crescimento do negócio."
      ],
      image: "/service4.png"
    },

    {
      title: "Atendimento consultivo",
      description: [
        "Oferecemos atendimento consultivo para orientar decisões contábeis e fiscais importantes.",
        "Nossa equipe está disponível para esclarecer dúvidas e ajudar no planejamento do seu negócio.",
        "Esse acompanhamento próximo traz mais segurança para suas decisões."
      ],
      image: "/service5.png"
    },

    {
      title: "Regularização de CNPJ",
      description: [
        "Empresas podem acumular pendências fiscais ao longo do tempo.",
        "Realizamos a análise completa da situação da empresa e identificamos irregularidades junto aos órgãos fiscais.",
        "Com nosso suporte, sua empresa volta a operar com total conformidade."
      ],
      image: "/service6.png"
    }

  ];

  return (

    <div>

      {/* SERVIÇOS */}
      {services.map((service, index) => {

        const reverse = index % 2 === 1;
        const isBlue = index % 2 === 0;

        return (

          <section
            key={index}
            className={`py-24 ${isBlue ? "bg-[#142B73] text-white" : "bg-white"}`}
          >

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

              {/* TEXTO */}
              <div className={reverse ? "md:order-2" : ""}>

                <h3
                  className={`text-2xl font-semibold mb-6 ${
                    isBlue ? "text-[#339BFE]" : "text-[#142B73]"
                  }`}
                >
                  {service.title}
                </h3>

                <div
                  className={`space-y-4 leading-relaxed ${
                    isBlue ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {service.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

              </div>

              {/* IMAGEM */}
              <div className={reverse ? "md:order-1" : ""}>

                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full"
                />

              </div>

            </div>

          </section>

        );
      })}

    </div>

  );
}