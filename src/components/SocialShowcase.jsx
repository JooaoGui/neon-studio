import { Grid3x3, Monitor, BarChart3, TrendingUp, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const HIGHLIGHTS = [
  { icon: Grid3x3, label: "Projetos" },
  { icon: Monitor, label: "Sites" },
  { icon: BarChart3, label: "Social Media" },
  { icon: TrendingUp, label: "Resultados" },
];

export default function SocialShowcase() {
  return (
    <section className="relative py-24 lg:py-28 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* phone mockup */}
          <div className="lg:col-span-5 flex justify-center animate-fade-up">
            <div className="relative w-[280px] sm:w-[300px] rounded-[2.2rem] border-[10px] border-ink bg-ink shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                <div className="w-24 h-5 bg-ink rounded-b-2xl" />
              </div>
              <div className="rounded-[1.6rem] overflow-hidden bg-white">
                {/* status bar */}
                <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] font-semibold text-ink">
                  <span>9:41</span>
                  <span className="flex gap-1 items-center">
                    <span className="w-3 h-2 border border-ink rounded-[2px]" />
                  </span>
                </div>

                {/* profile header */}
                <div className="px-4 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">neonstudio</span>
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="w-16 h-16 rounded-full bg-ink flex items-center justify-center shrink-0">
                      <svg width="26" height="26" viewBox="0 0 200 200" fill="none">
                        <path d="M40 40 L100 100 L100 132 L40 72 Z" fill="#FFFFFF" />
                        <path d="M100 100 L100 132 L68 132 Z" fill="#FFC72C" />
                        <path
                          d="M100 40 C132 40 158 58 158 84 C158 103 145 113 126 117 L157 150 L184 150 L138 101 C152 96 163 83 163 65 C163 39 137 18 100 18 L100 40 Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 flex justify-around text-center">
                      <div>
                        <div className="text-sm font-bold">158</div>
                        <div className="text-[9px] text-ink/50">publicações</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">12,4 mil</div>
                        <div className="text-[9px] text-ink/50">seguidores</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">7</div>
                        <div className="text-[9px] text-ink/50">seguindo</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-semibold">Neon Studio</p>
                    <p className="text-[11px] text-ink/60 leading-snug mt-0.5">
                      Soluções digitais para marcas que crescem.
                      <br />
                      Sites · Social Media · Estratégia
                      <br />
                      Criamos o que vem depois.
                    </p>
                    <p className="text-[11px] text-ink font-medium mt-0.5">🔗 linktr.ee/neonstudio</p>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-yellow text-ink text-xs font-semibold rounded-lg py-1.5">
                      Seguir
                    </button>
                    <button className="flex-1 bg-ink/5 text-ink text-xs font-semibold rounded-lg py-1.5">
                      Mensagem
                    </button>
                  </div>

                  <div className="flex justify-between mt-4 px-1">
                    {HIGHLIGHTS.map((h) => (
                      <div key={h.label} className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center">
                          <h.icon size={16} className="text-yellow" />
                        </div>
                        <span className="text-[8px] text-ink/60">{h.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* grid preview */}
                <div className="grid grid-cols-3 gap-[2px] mt-4">
                  <div className="aspect-square bg-ink flex items-center justify-center p-2">
                    <p className="text-white text-[9px] font-bold leading-tight">
                      Ideias que viram <span className="text-yellow">resultados.</span>
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=300&q=60"
                    alt=""
                    onError={(e) => (e.currentTarget.style.background = "#d9d9d9")}
                    className="aspect-square object-cover grayscale bg-ink/10"
                  />
                  <div className="aspect-square bg-yellow flex items-center justify-center p-2">
                    <p className="text-ink text-[9px] font-extrabold leading-tight">SUA MARCA MAIS LONGE</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&q=60"
                    alt=""
                    onError={(e) => (e.currentTarget.style.background = "#d9d9d9")}
                    className="aspect-square object-cover grayscale bg-ink/10"
                  />
                  <div className="aspect-square bg-ink flex items-center justify-center">
                    <Logo showText={false} variant="light" />
                  </div>
                  <div className="aspect-square bg-ink/90 flex items-center justify-center p-2">
                    <p className="text-white text-[8px] font-semibold tracking-widest leading-tight text-center">
                      ESTRATÉGIA
                      <br />
                      EM CADA
                      <br />
                      <span className="text-yellow">DETALHE</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right: text + dark cards */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] text-ink/50">PRESENÇA DIGITAL</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4 leading-tight max-w-lg">
              Mais que presença. Resultados de verdade.
            </h2>
            <p className="text-ink/55 mt-4 leading-relaxed max-w-lg">
              Cuidamos de cada detalhe da sua marca no digital — do perfil às métricas — para que ela realmente ande mais longe.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="rounded-2xl bg-ink text-white p-7 flex flex-col justify-between min-h-[190px] animate-fade-up delay-100">
                <div>
                  <p className="text-white/50 text-xs font-semibold tracking-[0.2em] mb-3">MÉTRICAS</p>
                  <h3 className="font-display text-xl font-bold leading-snug">
                    Mais que presença.
                    <br />
                    <span className="text-yellow">Resultados.</span>
                  </h3>
                </div>
                <div className="flex items-end gap-1.5 mt-6">
                  {[40, 65, 50, 85, 70].map((h, idx) => (
                    <span key={idx} className="w-2.5 rounded-sm bg-yellow" style={{ height: `${h * 0.4}px` }} />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-ink/10 p-7 flex flex-col justify-between min-h-[190px] animate-fade-up delay-200">
                <div>
                  <p className="text-ink/40 text-xs font-semibold tracking-[0.2em] mb-3">NOSSO PROCESSO</p>
                  <h3 className="font-display text-xl font-bold leading-snug text-ink">
                    Criar. Conectar.
                    <br />
                    Fazer crescer.
                  </h3>
                </div>
                <a href="#contato" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink mt-6">
                  Falar com a gente
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
