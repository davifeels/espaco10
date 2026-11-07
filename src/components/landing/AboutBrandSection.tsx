import React from 'react';
import { 
  History, 
  MapPin, 
  Users, 
  Shirt, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AboutBrandSection: React.FC = () => {
  const { setIsBrandGuideOpen } = useApp();

  return (
    <section id="sobre" className="py-24 bg-[#090A0E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <History className="w-3.5 h-3.5 text-rose-400" />
            Trajetória Sólida &amp; Reconhecimento Regional
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            17 Anos Construindo uma Relação Autêntica com a Moda
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Localizada em Planaltina-GO e conectada a milhares de clientes pelas redes sociais e pelo WhatsApp, a Espaço 10 consolidou uma história de 17 anos no segmento de moda feminina e masculina.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#131620] border border-white/5 hover:border-rose-500/30 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-rose-600/15 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
              <History className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">17 Anos de Atuação</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Experiência comprovada no comércio de moda, acompanhando a evolução dos estilos e a preferência dos clientes ao longo de quase duas décadas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#131620] border border-white/5 hover:border-rose-500/30 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-rose-600/15 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
              <Shirt className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">Moda Feminina &amp; Masculina</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Curadoria equilibrada que reúne peças casuais, streetwear, alfaiataria contemporânea e acessórios selecionados para diferentes ocasiões.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#131620] border border-white/5 hover:border-rose-500/30 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-rose-600/15 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">Comunidade de ~18,9k</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Presença forte no Instagram (@espaco_10.pl), onde clientes acompanham novidades, provadores e lançamentos diários com engajamento constante.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-[#131620] border border-white/5 hover:border-rose-500/30 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-rose-600/15 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">Envios para Todo o Brasil</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Operação de vendas com despacho nacional a partir de Planaltina-GO, oferecendo atendimento assistido até a entrega final ao cliente.
            </p>
          </div>

        </div>

        {/* Visual Evolution Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#171A24] via-[#10121A] to-[#1C1217] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                Proposta de Evolução Digital
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Apresentação Comercial em Nível de Grandes Marcas Globais
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                O projeto <strong>Espaço 10 Experience</strong> valoriza os 17 anos de história da marca com um redesign sofisticado da logo e um ecossistema digital que conecta vitrine online, atendimento humanizado via WhatsApp e inteligência comercial para a equipe.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsBrandGuideOpen(true)}
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-950/40 transition-all cursor-pointer"
                >
                  <span>Ver Estudo de Redesign da Logo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/40 rounded-2xl p-6 border border-white/10 text-center space-y-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Origem &amp; Raízes
              </div>
              <div className="flex items-center justify-center gap-2 text-white font-heading text-lg font-bold">
                <MapPin className="w-5 h-5 text-rose-500" />
                Planaltina, Goiás
              </div>
              <div className="text-xs text-gray-400">
                Atendimento regional personalizado somado ao alcance nacional das redes sociais.
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-emerald-400 font-mono">
                Atendimento Oficial via WhatsApp
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
