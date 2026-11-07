import React from 'react';
import { Truck, MapPin, PackageCheck, ArrowRight } from 'lucide-react';

export const NationalShippingSection: React.FC = () => {
  return (
    <section id="envios" className="py-24 bg-[#08090C] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#12141D] via-[#0E1017] to-[#181116] border border-white/[0.08] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/30 border border-red-800/30 text-red-300 text-[11px] font-sans font-semibold uppercase tracking-[0.2em]">
                <Truck className="w-3.5 h-3.5" />
                Operação de Envios Nacionais
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
                De Planaltina-GO para Todas as Regiões do <span className="font-editorial italic font-light text-zinc-300">Brasil</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans font-light">
                A Espaço 10 atende clientes em todo o território nacional. Suas peças selecionadas são cuidadosamente embaladas e enviadas com acompanhamento assistido da nossa equipe pelo WhatsApp.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-1">
                  <div className="flex items-center gap-2 text-red-400 font-sans font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    Ponto de Partida Central
                  </div>
                  <p className="text-xs text-zinc-400 font-sans font-light">
                    Origem em Planaltina-GO (Região Centro-Oeste), facilitando a logística de distribuição para o Norte, Nordeste, Sul e Sudeste.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-sans font-bold text-xs uppercase tracking-wider">
                    <PackageCheck className="w-4 h-4" />
                    Cuidado no Embalamento
                  </div>
                  <p className="text-xs text-zinc-400 font-sans font-light">
                    Todas as peças são revisadas antes do envio, dobradas e protegidas para manter o caimento impecável.
                  </p>
                </div>

              </div>

              <p className="text-xs text-zinc-400 italic font-sans font-light">
                * Condições de frete e prazos para o seu CEP são informados diretamente durante o atendimento no WhatsApp pela nossa equipe.
              </p>
            </div>

            {/* Right Column Visual Badge Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.1] shadow-2xl text-center space-y-6">
                
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-800 to-red-950 border border-red-700/40 flex items-center justify-center text-white shadow-xl">
                  <Truck className="w-7 h-7 text-red-200" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-white">
                    Envios para Todo o Brasil
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans font-light">
                    Atendimento individualizado para tirar medidas e calcular o envio com transparência.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-left space-y-2 font-sans">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Atendimento por WhatsApp:</span>
                    <span className="text-emerald-400 font-semibold">Ativo</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Origem:</span>
                    <span className="text-white font-medium">Planaltina, GO</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Destino:</span>
                    <span className="text-red-400 font-medium">Todo o Território Nacional</span>
                  </div>
                </div>

                <a
                  href="#catalogo"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 border border-red-700/40 text-white font-sans font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <span>Escolher Peça para Envio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
