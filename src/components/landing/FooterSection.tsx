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
    <footer className="bg-[#050608] border-t border-white/[0.08] pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Espaco10Logo variant="horizontal" theme="dark" size="sm" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm font-sans font-light">
              Espaço 10 — Alta moda feminina e masculina. 17 anos conectando alfaiataria, qualidade e atendimento próximo com entregas em todo o Brasil a partir de Planaltina-GO.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/espaco_10.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white hover:bg-red-800 transition-all"
                title="Instagram Oficial"
                aria-label="Perfil oficial no Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsBrandGuideOpen(true)}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-red-600/40 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-sans font-medium"
              >
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                Guia da Identidade Visual
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-[0.15em]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-sans font-light">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">História 17 Anos</a></li>
              <li><a href="#colecoes" className="hover:text-white transition-colors">Coleções 2026</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo Digital</a></li>
              <li><a href="#experiencia" className="hover:text-white transition-colors">Como Comprar</a></li>
              <li><a href="#envios" className="hover:text-white transition-colors">Envios Nacionais</a></li>
            </ul>
          </div>

          {/* Local & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-[0.15em]">
              Localização
            </h4>
            <div className="space-y-2 text-xs font-sans font-light">
              <div className="flex items-start gap-1.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Planaltina - GO<br />Brasil</span>
              </div>
              <div className="text-zinc-400">
                Atendimento: WhatsApp
              </div>
              <div className="text-zinc-400">
                Instagram: @espaco_10.pl (~18,9k)
              </div>
            </div>
          </div>

          {/* Commerce Access (3 cols) */}
          <div className="lg:col-span-3 space-y-3 p-4 rounded-xl bg-[#0D0F16] border border-white/[0.08]">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-[0.15em] flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-red-500" />
              Espaço 10 Commerce
            </h4>
            <p className="text-[11px] text-zinc-400 font-sans font-light">
              Ambiente demonstrativo de gestão comercial para a equipe da loja: catálogo, CRM, atendimento simulado e relatórios.
            </p>
            <button
              onClick={() => {
                setView('dashboard');
                setDashboardTab('overview');
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 border border-red-700/40 text-white font-sans font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-red-950/40 cursor-pointer"
            >
              <span>Abrir Painel Administrativo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Mandatory Transparency Box */}
        <div className="p-5 rounded-2xl bg-[#0B0C10] border border-white/[0.08] text-xs text-zinc-400 space-y-3">
          <div className="flex items-center gap-2 text-zinc-300 font-bold uppercase tracking-wider text-[11px]">
            <AlertCircle className="w-4 h-4 text-red-400" />
            Aviso de Transparência &amp; Projeto Conceitual
          </div>

          <p className="text-zinc-300 font-medium leading-relaxed font-sans">
            "Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Espaço 10."
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
            <div>• Identidade visual proposta</div>
            <div>• Produtos e fotos fictícios</div>
            <div>• Preços e estoques ilustrativos</div>
            <div>• Conversas e CRM simulados</div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-sans">
          <div>
            Espaço 10 Experience © 2026 • Direção Criativa: <strong>Davi Anderson</strong>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBrandGuideOpen(true)}
              className="hover:text-white transition-colors"
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
