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
      className="relative min-h-[96vh] flex items-center justify-center pt-36 pb-24 overflow-hidden bg-radial from-[#12141D] via-[#08090C] to-[#040507]"
    >
      {/* Background Subtle Ambience Lights - Aristocratic Carmine & Charcoal */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-950/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-red-900/15 rounded-full blur-[200px] pointer-events-none" />

      {/* Decorative Ultra-fine Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 90% Screen Width Container with Generous Breathing Room */}
      <div className="w-[90%] max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Editorial Text Content (Spacious & Majestic) */}
          <div className="lg:col-span-7 space-y-8 xl:space-y-10 text-left">
            
            {/* Top Forbes/Luxury Editorial Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-zinc-300">
                17 Anos de História • Planaltina-GO
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[11px] font-editorial italic text-red-400">Curadoria Exclusiva</span>
            </div>

            {/* Main Forbes/High-Fashion Serif Headline with Majestic Breathing Room */}
            <h1 className="text-5xl sm:text-7xl xl:text-[80px] font-serif text-white tracking-tight leading-[1.06]">
              Seu estilo.<br />
              <span className="font-editorial italic font-normal text-zinc-200">Sua identidade.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
                Seu espaço.
              </span>
            </h1>

            {/* Subtitle with Room to Breathe */}
            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-sans font-light leading-relaxed">
              Descubra uma experiência de moda que conecta sofisticação, personalidade e conveniência. Curadoria de excelência para o vestuário feminino e masculino, com atendimento consultivo via WhatsApp e envios nacionais para todo o Brasil.
            </p>

            {/* CTAs with Generous Luxury Tactile Depth */}
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href="#catalogo"
                className="px-9 py-4 rounded-xl bg-gradient-to-r from-red-800 via-red-900 to-red-950 hover:from-red-700 hover:to-red-900 border border-red-700/50 text-white font-sans font-semibold text-xs tracking-[0.14em] uppercase shadow-2xl shadow-red-950/60 flex items-center gap-3 transition-all hover:scale-[1.02] group"
              >
                <span>Explorar Coleção</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#sobre"
                className="px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-300 hover:text-white font-sans font-medium text-xs tracking-[0.12em] uppercase transition-all"
              >
                Conhecer a Espaço 10
              </a>
            </div>

            {/* Brand Metrics Strip (Spaced & Authoritative) */}
            <div className="grid grid-cols-3 gap-8 xl:gap-14 pt-10 border-t border-white/[0.08] max-w-xl">
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  17 <span className="text-red-500 font-editorial italic text-2xl font-normal">Anos</span>
                </div>
                <p className="text-xs text-zinc-400 font-sans mt-1">Solidez &amp; Confiança</p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  +18,9k
                </div>
                <p className="text-xs text-zinc-400 font-sans mt-1">Seguidores no Instagram</p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  100%
                </div>
                <p className="text-xs text-zinc-400 font-sans mt-1">Envios para todo o Brasil</p>
              </div>
            </div>

          </div>

          {/* Right Luxury Editorial Fashion Showcase (Ample & Balanced) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              
              {/* Main Fashion Hero Image (High Fashion Runway & Tailoring Editorial) */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/[0.12] group bg-[#0A0C11]">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
                  alt="Editorial de Alta Moda Espaço 10"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                {/* Floating Bottom Card Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/[0.12] text-left space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold tracking-[0.22em] text-red-400 uppercase">
                      Edição Limitada 2026
                    </span>
                    <span className="text-[11px] font-editorial italic text-zinc-400">Haute Couture</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-white">
                    Alfaiataria Contemporânea &amp; Urban Chic
                  </h3>
                </div>
              </div>

              {/* Floating Accent Card 1: 17 Anos Seal with generous breath */}
              <div className="absolute -top-5 -left-5 sm:-left-8 p-4 rounded-2xl bg-[#0D0F16]/95 backdrop-blur-xl border border-white/[0.12] shadow-2xl flex items-center gap-3.5 animate-pulse-luxury">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-800 to-red-950 border border-red-700/40 flex items-center justify-center text-white font-serif font-bold text-base shadow-xl">
                  10
                </div>
                <div className="text-left">
                  <div className="text-xs font-serif font-semibold text-white">Espaço 10 Experience</div>
                  <div className="text-[10px] font-sans text-zinc-400">Planaltina-GO • Desde 2007</div>
                </div>
              </div>

              {/* Floating Accent Card 2: National Delivery */}
              <div className="absolute -bottom-6 -right-5 sm:-right-8 p-4 rounded-2xl bg-[#0D0F16]/95 backdrop-blur-xl border border-white/[0.12] shadow-2xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-red-400">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-serif font-semibold text-white">Vendas &amp; Envios Nacionais</div>
                  <div className="text-[10px] font-sans text-zinc-400">Atendimento Consultivo via WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-20 pb-2 flex justify-center">
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-[11px] font-sans tracking-[0.18em] uppercase text-zinc-500 hover:text-white transition-colors"
          >
            <span>Conheça a história e a nova proposta</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
