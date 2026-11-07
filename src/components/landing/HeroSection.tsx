import React from 'react';
import { 
  ArrowRight, 
  Truck, 
  ChevronDown
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial from-[#181C26] via-[#0B0C10] to-[#060709]"
    >
      {/* Background Subtle Ambience Lights */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-rose-800/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">
                17 Anos de História • Planaltina-GO
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs text-rose-400 font-bold">Nova Experiência Digital</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white font-heading tracking-tight leading-[1.08]">
              Seu estilo.<br />
              Sua identidade.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-rose-500">
                Seu espaço.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
              Descubra uma experiência de moda que conecta estilo, personalidade e praticidade. Curadoria premium para o guarda-roupa feminino e masculino, com atendimento humanizado via WhatsApp e envios para todo o Brasil.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#catalogo"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-rose-950/50 flex items-center gap-3 transition-all hover:scale-[1.02] group"
              >
                <span>Explorar Coleção</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#sobre"
                className="px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 hover:text-white font-semibold text-sm tracking-wide transition-all"
              >
                Conhecer a Espaço 10
              </a>
            </div>

            {/* Brand Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  17 <span className="text-rose-500 text-xl">Anos</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">Trajetória e confiança consolidada</p>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  +18,9k
                </div>
                <p className="text-xs text-gray-400 mt-0.5">Seguidores no Instagram</p>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  100%
                </div>
                <p className="text-xs text-gray-400 mt-0.5">Envios para todo o Brasil</p>
              </div>
            </div>

          </div>

          {/* Right Fashion Composition Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Fashion Hero Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
                  alt="Editorial de Moda Espaço 10"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Bottom Card Inside Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                      Preview Primavera / Outono 2026
                    </span>
                    <span className="text-[10px] text-gray-400">Coleção Exclusiva</span>
                  </div>
                  <h3 className="text-sm font-bold text-white font-heading">
                    Alfaiataria Descontraída &amp; Streetwear Urbano
                  </h3>
                </div>
              </div>

              {/* Floating Accent Card 1: 17 Anos Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-8 p-3.5 rounded-2xl bg-[#141722]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white font-black font-heading shadow-lg shadow-rose-950/50">
                  10
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Espaço 10 Experience</div>
                  <div className="text-[10px] text-gray-400">Desde 2007 • Planaltina-GO</div>
                </div>
              </div>

              {/* Floating Accent Card 2: National Delivery */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-[#141722]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Vendas &amp; Envios Nacionais</div>
                  <div className="text-[10px] text-emerald-400">Rastreamento Assistido via WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-rose-400 transition-colors"
          >
            <span>Descubra a história e a nova proposta</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
