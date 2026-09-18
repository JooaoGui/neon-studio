import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 lg:py-28 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl bg-ink px-8 py-16 sm:px-16 sm:py-20 overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-yellow/90" />
          <div className="absolute -left-10 bottom-0 w-40 h-40 rounded-full border border-white/10" />

          <div className="relative max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-yellow">MARCAS · PESSOAS · NEGÓCIOS</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-5 leading-tight">
              Vamos fazer sua marca ir mais longe?
            </h2>
            <p className="text-white/60 mt-5 text-base sm:text-lg max-w-lg leading-relaxed">
              Conte um pouco sobre o seu negócio e vamos montar juntos a estratégia digital ideal para o seu momento.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-yellow text-ink font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-white transition-all duration-300 group"
              >
                <MessageCircle size={17} />
                Falar no WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:contato@neonstudio.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white px-2 py-3.5 border-b-2 border-transparent hover:border-yellow transition-all"
              >
                contato@neonstudio.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
