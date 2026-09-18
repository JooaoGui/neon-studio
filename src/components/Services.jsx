import { Monitor, BarChart3, Users2, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Monitor,
    title: "Sites profissionais",
    description: "Sites institucionais e landing pages rápidos, responsivos e feitos para converter visitantes em clientes.",
  },
  {
    icon: BarChart3,
    title: "Social Media que gera resultados",
    description: "Planejamento, conteúdo e gestão de redes sociais com estratégia focada em crescimento e engajamento real.",
  },
  {
    icon: Users2,
    title: "Estratégia digital completa",
    description: "Marketing de performance, tráfego pago e posicionamento de marca para levar seu negócio mais longe.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] text-ink/50">O QUE FAZEMOS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4 leading-tight">
              Soluções digitais que{" "}
              <span className="relative inline-block">
                conectam
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-yellow -z-10" />
              </span>{" "}
              marcas e pessoas
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink/55 leading-relaxed">
              Um hub completo para sua marca crescer no online — do primeiro clique ao resultado que aparece no fim do mês.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1.5 ${
                i === 1
                  ? "bg-ink border-ink text-white hover:shadow-2xl"
                  : "bg-paper border-ink/10 hover:border-ink/20 hover:shadow-xl"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${
                  i === 1 ? "bg-yellow" : "bg-ink"
                }`}
              >
                <service.icon size={24} className={i === 1 ? "text-ink" : "text-white"} strokeWidth={1.8} />
              </div>

              <h3 className={`font-display text-lg font-bold mb-3 ${i === 1 ? "text-white" : "text-ink"}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${i === 1 ? "text-white/60" : "text-ink/55"}`}>
                {service.description}
              </p>

              <a
                href="#contato"
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                  i === 1 ? "text-yellow" : "text-ink"
                }`}
              >
                Saiba mais
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
