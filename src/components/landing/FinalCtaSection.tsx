import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#090A0E] via-[#120F16] to-[#0B0C10] relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Espaço 10 Experience
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
          Encontre seu próximo estilo.
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Explore a experiência Espaço 10 e descubra uma nova forma de conhecer nossas coleções. Moda feminina e masculina com curadoria de 17 anos de história.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#catalogo"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-rose-950/50 flex items-center gap-2.5 transition-all hover:scale-[1.02]"
          >
            <span>Explorar Catálogo</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5561999999999&text=Ol%C3%A1%20Espa%C3%A7o%2010!%20Gostaria%20de%20atendimento%20para%20conhecer%20as%20pe%C3%A7as%20da%20loja."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-950/50 flex items-center gap-2.5 transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
