import React from 'react';
import { 
  MapPin, 
  Sparkles, 
  AlertCircle, 
  LayoutDashboard,
  ExternalLink
} from 'lucide-react';
import { Espaco10Logo } from '../brand/Espaco10Logo';
import { InstagramIcon } from '../ui/InstagramIcon';
import { useApp } from '../../context/AppContext';

export const FooterSection: React.FC = () => {
  const { setView, setDashboardTab, setIsBrandGuideOpen } = useApp();

  return (
    <footer className="bg-[#060709] border-t border-white/10 pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Espaco10Logo variant="horizontal" theme="dark" size="sm" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Espaço 10 — Moda feminina e masculina contemporânea. 17 anos conectando estilo, qualidade e atendimento próximo com entregas em todo o Brasil a partir de Planaltina-GO.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/espaco_10.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-rose-600 transition-all"
                title="Instagram Oficial"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsBrandGuideOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-rose-500/40 text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Guia da Identidade Visual
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-rose-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-rose-400 transition-colors">História 17 Anos</a></li>
              <li><a href="#colecoes" className="hover:text-rose-400 transition-colors">Coleções 2026</a></li>
              <li><a href="#catalogo" className="hover:text-rose-400 transition-colors">Catálogo Digital</a></li>
              <li><a href="#experiencia" className="hover:text-rose-400 transition-colors">Como Comprar</a></li>
              <li><a href="#envios" className="hover:text-rose-400 transition-colors">Envios Nacionais</a></li>
            </ul>
          </div>

          {/* Local & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Localização &amp; Canal
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-1.5 text-gray-300">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>Planaltina - GO<br />Brasil</span>
              </div>
              <div className="text-gray-400">
                Atendimento: WhatsApp
              </div>
              <div className="text-gray-400">
                Instagram: @espaco_10.pl (~18,9k)
              </div>
            </div>
          </div>

          {/* Commerce Access (3 cols) */}
          <div className="lg:col-span-3 space-y-3 p-4 rounded-xl bg-[#0F1118] border border-white/10">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-rose-500" />
              Espaço 10 Commerce
            </h4>
            <p className="text-[11px] text-gray-400">
              Ambiente demonstrativo de gestão comercial para a equipe da loja: catálogo, CRM, atendimento simulado e relatórios.
            </p>
            <button
              onClick={() => {
                setView('dashboard');
                setDashboardTab('overview');
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-rose-950/40"
            >
              <span>Abrir Painel Administrativo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Mandatory Transparency Box */}
        <div className="p-5 rounded-2xl bg-[#0D0E14] border border-amber-500/20 text-xs text-gray-400 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-[11px]">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            Aviso de Transparência &amp; Projeto Conceitual
          </div>

          <p className="text-gray-300 font-medium leading-relaxed">
            "Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Espaço 10."
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-gray-400">
            <div>• Identidade visual proposta</div>
            <div>• Produtos e fotos fictícios</div>
            <div>• Preços e estoques ilustrativos</div>
            <div>• Conversas e CRM simulados</div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            Espaço 10 Experience © 2026 • Direção Criativa &amp; Arquitetura: <strong>Davi Anderson</strong>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBrandGuideOpen(true)}
              className="hover:text-rose-400 transition-colors"
            >
              Manual da Marca (Antes x Depois)
            </button>
            <span>•</span>
            <span>Planaltina - Goiás</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
