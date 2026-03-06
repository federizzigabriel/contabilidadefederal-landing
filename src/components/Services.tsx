import { Building2, FileText, Calculator, BarChart3, Users, Shield } from "lucide-react";

export default function Services() {

  const services = [
    {
      icon: Building2,
      title: "Abertura de CNPJ",
      description: "Abra sua empresa rapidamente e comece a atuar como PJ com segurança."
    },
    {
      icon: FileText,
      title: "Contabilidade mensal",
      description: "Cuidamos de todas as obrigações contábeis e fiscais do seu CNPJ."
    },
    {
      icon: Calculator,
      title: "Planejamento tributário",
      description: "Estratégias para pagar menos impostos dentro da lei."
    },
    {
      icon: BarChart3,
      title: "Organização financeira",
      description: "Tenha controle das suas receitas, despesas e crescimento."
    },
    {
      icon: Users,
      title: "Atendimento consultivo",
      description: "Suporte próximo para tirar dúvidas e orientar suas decisões."
    },
    {
      icon: Shield,
      title: "Regularização de CNPJ",
      description: "Resolva pendências fiscais e mantenha sua empresa sempre regular."
    }
  ];

  return (
    <section className="py-20 bg-[#142B73] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Nossos serviços
          </h2>

          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Soluções contábeis completas para profissionais PJ, autônomos e empresas que
            buscam organização fiscal e crescimento sustentável.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition"
              >

                {/* ÍCONE */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#339BFE]/20 text-[#339BFE] rounded-xl mb-5">
                  <Icon size={24} />
                </div>

                {/* TITULO */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="text-blue-100">
                  {service.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}