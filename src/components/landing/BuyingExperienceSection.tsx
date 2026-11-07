import React from 'react';
import { 
  Compass, 
  Eye, 
  Ruler, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export const BuyingExperienceSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Descubra a Peça',
      description: 'Navegue pelo catálogo digital organizado com novidades, destaques de moda feminina e masculina, alfaiataria e streetwear.',
      icon: Compass,
      tag: 'Exploração Intuitiva',
    },
    {
      step: '02',
      title: 'Veja Fotos e Detalhes',
      description: 'Confira ângulos detalhados, especificações de tecidos premium, caimento e composição de cada modelo.',
      icon: Eye,
      tag: 'Transparência Visual',
    },
    {
      step: '03',
      title: 'Consulte Tamanho & Cor',
      description: 'Verifique a grade de medidas e selecione a variação exata que valoriza seu biotipo e estilo pessoal.',
      icon: Ruler,
      tag: 'Ajuste Perfeito',
    },
    {
      step: '04',
      title: 'Atendimento via WhatsApp',
      description: 'Clique em um botão e inicie o contato direto com a equipe em Planaltina-GO, com os dados da peça já preenchidos.',
      icon: MessageSquare,
      tag: 'Conversa Humanizada',
    },
    {
      step: '05',
      title: 'Compra Assistida & Envio',
      description: 'Tire dúvidas em tempo real, receba fotos na loja se desejar, efetue o pagamento seguro e acompanhe o envio com rastreio.',
      icon: CheckCircle,
      tag: 'Entrega Nacional',
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-[#07080B] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/30 border border-red-800/30 text-red-300 text-[11px] font-sans font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            Jornada de Compra Consultiva
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
            Como Funciona a Experiência <span className="font-editorial italic font-light text-zinc-300">Espaço 10</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans font-light">
            A união da agilidade de um catálogo digital moderno com o carinho e o atendimento consultivo que tornaram a marca querida há 17 anos.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="p-6 rounded-2xl bg-[#0D0F16] border border-white/[0.08] hover:border-red-800/40 transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-xl text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-red-500">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-red-400 group-hover:bg-red-950/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1">
                    {item.tag}
                  </span>

                  <h3 className="text-base font-serif font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] text-zinc-500 flex items-center gap-1 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Processo Transparente</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
