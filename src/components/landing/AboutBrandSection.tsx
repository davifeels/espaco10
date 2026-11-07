import React from 'react';
import { 
  History, 
  MapPin, 
  Users, 
  Shirt, 
  Sparkles, 
  ArrowUpRight,
  Send
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AboutBrandSection: React.FC = () => {
  const { setIsBrandGuideOpen } = useApp();

  return (
    <section id="sobre" className="py-24 bg-[#08090C] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Forbes Editorial Style) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/30 border border-red-800/30 text-red-300 text-[11px] font-sans font-semibold uppercase tracking-[0.2em]">
            <History className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
            Trajetória Sólida &amp; Tradição Regional
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            17 Anos Construindo uma Relação Autêntica com a <span className="font-editorial italic font-light text-zinc-300">Moda</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans font-light">
            Sediada em Planaltina-GO e conectada a milhares de clientes pelas redes sociais e pelo WhatsApp, a Espaço 10 construiu uma trajetória consolidada de 17 anos no segmento de moda feminina e masculina.
          </p>
        </div>

        {/* 4 Pillars Grid with High-End Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#0E1017] border border-white/[0.07] hover:border-red-800/40 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-red-400 mb-5 group-hover:scale-105 transition-transform">
              <History className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-white mb-2">17 Anos de História</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
              Experiência comprovada no comércio de moda, acompanhando a evolução dos estilos e a preferência dos clientes ao longo de quase duas décadas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#0E1017] border border-white/[0.07] hover:border-red-800/40 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-red-400 mb-5 group-hover:scale-105 transition-transform">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-white mb-2">Moda Feminina &amp; Masculina</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
              Curadoria apurada que harmoniza alfaiataria contemporânea, peças casuais, streetwear refinado e acessórios selecionados.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#0E1017] border border-white/[0.07] hover:border-red-800/40 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-red-400 mb-5 group-hover:scale-105 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-white mb-2">Comunidade de ~18,9k</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
              Presença consolidada no Instagram (@espaco_10.pl), onde o público acompanha lançamentos diários, provadores e novidades.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-[#0E1017] border border-white/[0.07] hover:border-red-800/40 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-red-400 mb-5 group-hover:scale-105 transition-transform">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-white mb-2">Envios para Todo o Brasil</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
              Operação de vendas com despacho nacional a partir de Planaltina-GO, oferecendo suporte atencioso até a entrega ao cliente.
            </p>
          </div>

        </div>

        {/* Visual Evolution Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#12141D] via-[#0E1017] to-[#181014] border border-white/[0.09] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-red-400 uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" />
                Proposta de Evolução Digital
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white leading-tight">
                Apresentação Comercial com Padrão de Grandes Veículos Globais
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl font-sans font-light">
                O projeto <strong>Espaço 10 Experience</strong> valoriza os 17 anos de trajetória da empresa através de um redesign sofisticado da logo e um ecossistema digital que integra catálogo online, atendimento humanizado via WhatsApp e gestão comercial para a equipe.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsBrandGuideOpen(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 border border-red-700/40 text-white font-sans font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-red-950/40 transition-all cursor-pointer"
                >
                  <span>Manual Oficial de Redesign</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/40 rounded-2xl p-6 border border-white/[0.08] text-center space-y-4">
              <div className="text-[11px] font-sans font-medium text-zinc-400 uppercase tracking-[0.2em]">
                Origem &amp; Raízes
              </div>
              <div className="flex items-center justify-center gap-2 text-white font-serif text-xl font-bold">
                <MapPin className="w-5 h-5 text-red-500" />
                Planaltina, Goiás
              </div>
              <div className="text-xs text-zinc-400 font-sans font-light">
                Atendimento regional personalizado somado ao alcance nacional das redes sociais.
              </div>
              <div className="pt-2 border-t border-white/[0.08] text-[11px] text-red-300 font-mono">
                Canal Oficial: WhatsApp
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
