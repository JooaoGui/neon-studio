import { ArrowRight, Sparkles } from "lucide-react";

const SIDE_WORDS = ["ESTRATÉGIA", "DESIGN", "TECNOLOGIA", "RESULTADOS"];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-paper">
      {/* decorative yellow blob */}
      <div className="absolute -right-24 top-24 w-[420px] h-[420px] rounded-full bg-yellow/90 blur-[2px] hidden lg:block" />
      <div className="absolute -left-32 bottom-0 w-72 h-72 rounded-full border border-ink/10 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* left text */}
          <div className="lg:col-span-5 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-ink/60 mb-6">
              <Sparkles size={14} className="text-yellow" fill="#FFC72C" />
              ESTRATÉGIA DIGITAL
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight text-ink">
              Grandes marcas
              <br />
              crescem com{" "}
              <span className="relative inline-block">
                boas ideias.
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  height="10"
                  viewBox="0 0 220 10"
                  preserveAspectRatio="none"
                >
                  <path d="M2 8 C 60 2, 160 2, 218 8" stroke="#FFC72C" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-base lg:text-lg text-ink/60 leading-relaxed max-w-md">
              Desenvolvemos soluções digitais que conectam marcas e pessoas — sites, marketing e social media em um só hub.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-yellow hover:text-ink transition-all duration-300 group"
              >
                Começar agora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-ink px-2 py-3.5 border-b-2 border-transparent hover:border-yellow transition-all"
              >
                Ver portfólio
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8">
              <div>
                <div className="font-display text-2xl font-extrabold text-ink">120+</div>
                <div className="text-xs text-ink/50 mt-1">marcas atendidas</div>
              </div>
              <div className="w-px h-9 bg-ink/10" />
              <div>
                <div className="font-display text-2xl font-extrabold text-ink">4.9/5</div>
                <div className="text-xs text-ink/50 mt-1">satisfação média</div>
              </div>
              <div className="w-px h-9 bg-ink/10" />
              <div>
                <div className="font-display text-2xl font-extrabold text-ink">+300%</div>
                <div className="text-xs text-ink/50 mt-1">crescimento médio</div>
              </div>
            </div>
          </div>

          {/* right mock browser with portrait */}
          <div className="lg:col-span-7 relative animate-fade-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ink/10 bg-white">
              {/* browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-ink/5">
                <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
              </div>

              <div className="relative bg-ink min-h-[380px] sm:min-h-[440px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,#2a2a2a,#0a0a0a)]" />
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  aria-hidden="true"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />

                <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between min-h-[380px] sm:min-h-[440px]">
                  <div>
                    <p className="text-yellow text-xs font-semibold tracking-[0.2em] mb-3">ESTRATÉGIA DIGITAL</p>
                    <h3 className="text-white font-display text-2xl sm:text-3xl font-bold leading-tight max-w-[16ch]">
                      Sua marca mais longe no digital.
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white/70 text-xs">Criamos o que vem depois.</span>
                  </div>
                </div>

                {/* vertical side words */}
                <div className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 items-end">
                  {SIDE_WORDS.map((w) => (
                    <span key={w} className="text-white/50 text-[10px] font-semibold tracking-[0.3em]">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-8 -left-4 sm:-left-10 bg-white rounded-xl shadow-xl border border-ink/5 px-5 py-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-lg bg-yellow flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17L9 11L13 15L21 7" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 7H21V13" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-sm text-ink">Mais que presença.</div>
                <div className="text-xs text-ink/50">Resultados de verdade.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
