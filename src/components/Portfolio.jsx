import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    name: "Auro Beauty",
    tag: "Sites · Branding",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vacaria Store",
    tag: "Social Media · Tráfego",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "WTW Studio",
    tag: "Sites · Performance",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-ink/50">PORTFÓLIO</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4 leading-tight">
              Marcas que já <br className="hidden sm:block" /> foram mais longe
            </h2>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink border-b-2 border-yellow pb-1 w-fit"
          >
            Ver todos os projetos
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#2c2c2c,#0a0a0a)]" />
              <img
                src={project.img}
                alt=""
                aria-hidden="true"
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-yellow text-[11px] font-semibold tracking-[0.15em] mb-1.5">
                  {project.tag}
                </span>
                <h3 className="text-white font-display text-xl font-bold flex items-center gap-2">
                  {project.name}
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 translate-x-[-6px] group-hover:translate-x-0 transition-all duration-300"
                  />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
