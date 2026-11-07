import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#08090C] via-[#0D0B10] to-[#040507] relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-red-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/30 border border-red-800/30 text-red-300 text-[11px] font-sans font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          Espaço 10 Experience
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight leading-tight">
          Encontre seu próximo <span className="font-editorial italic font-light text-zinc-300">estilo</span>.
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
          Explore a experiência Espaço 10 e descubra uma nova forma de conhecer nossas coleções. Moda feminina e masculina com curadoria de 17 anos de história e envios para todo o Brasil.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#catalogo"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 border border-red-700/50 text-white font-sans font-semibold text-xs tracking-[0.12em] uppercase shadow-2xl shadow-red-950/50 flex items-center gap-2.5 transition-all hover:scale-[1.02]"
          >
            <span>Explorar Catálogo</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5561999999999&text=Ol%C3%A1%20Espa%C3%A7o%2010!%20Gostaria%20de%20atendimento%20para%20conhecer%20as%20pe%C3%A7as%20da%20loja."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-sans font-semibold text-xs tracking-[0.12em] uppercase shadow-2xl shadow-emerald-950/50 flex items-center gap-2.5 transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
