import React from 'react';
import { Truck, MapPin, PackageCheck, Shield, MessageSquare, ArrowRight } from 'lucide-react';

export const NationalShippingSection: React.FC = () => {
  return (
    <section id="envios" className="py-24 bg-[#090A0E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#151824] via-[#0E1017] to-[#1A1218] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                Operação de Envios Nacionais
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                De Planaltina-GO para Todas as Regiões do Brasil
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                A Espaço 10 atende clientes em todo o território nacional. Suas peças selecionadas são cuidadosamente embaladas e enviadas com acompanhamento assistido da nossa equipe pelo WhatsApp.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    Ponto de Partida Central
                  </div>
                  <p className="text-xs text-gray-400">
                    Origem em Planaltina-GO (Região Centro-Oeste), facilitando a logística de distribuição para o Norte, Nordeste, Sul e Sudeste.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <PackageCheck className="w-4 h-4" />
                    Cuidado no Embalamento
                  </div>
                  <p className="text-xs text-gray-400">
                    Todas as peças são revisadas antes do envio, dobradas e protegidas para manter o caimento e o aroma característico.
                  </p>
                </div>

              </div>

              {/* Consultation Note */}
              <p className="text-xs text-gray-400 italic">
                * Condições de frete e prazos para o seu CEP são informados diretamente durante o atendimento no WhatsApp pela nossa equipe.
              </p>
            </div>

            {/* Right Column Visual Badge Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-8 rounded-3xl bg-[#11131B] border border-white/15 shadow-2xl text-center space-y-6">
                
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white shadow-xl shadow-rose-950/60">
                  <Truck className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-heading">
                    Envios para Todo o Brasil
                  </h3>
                  <p className="text-xs text-gray-400">
                    Atendimento individualizado para tirar medidas e calcular o envio com transparência.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-left space-y-2">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Atendimento por WhatsApp:</span>
                    <span className="text-emerald-400 font-semibold">Ativo</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Origem:</span>
                    <span className="text-white font-medium">Planaltina, GO</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Destino:</span>
                    <span className="text-rose-400 font-medium">Todo o Território Nacional</span>
                  </div>
                </div>

                <a
                  href="#catalogo"
                  className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-rose-950/40"
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
