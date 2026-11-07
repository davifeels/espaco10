import React from 'react';
import { 
  Store, 
  MapPin, 
  Phone, 
  Sparkles, 
  RotateCcw, 
  ShieldCheck, 
  Palette,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { Espaco10Logo } from '../../brand/Espaco10Logo';
import { InstagramIcon } from '../../ui/InstagramIcon';

export const SettingsTab: React.FC = () => {
  const { setIsBrandGuideOpen } = useApp();

  const handleResetData = () => {
    if (confirm('Deseja resetar os dados demonstrativos do catálogo e leads para o padrão inicial?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn text-left max-w-4xl">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white font-heading">
          Configurações da Loja &amp; Identidade
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Parâmetros do ecossistema comercial Espaço 10 Experience.
        </p>
      </div>

      {/* Brand Identity Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#171B26] to-[#12141C] border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Espaco10Logo variant="badge" theme="dark" size="md" />
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Identidade Visual Oficial (Redesign 2026)
              </h3>
              <p className="text-xs text-gray-400">
                Logotipo modernizado com tipografia Syne e monograma arquitetônico E10.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsBrandGuideOpen(true)}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-950/40 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Abrir Manual Completo da Marca</span>
          </button>
        </div>
      </div>

      {/* Store Parameters Form */}
      <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 space-y-6">
        <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wider text-rose-400">
          Dados Oficiais da Empresa (Conforme Fornecido)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          
          <div className="space-y-1">
            <label className="text-gray-400 font-medium">Nome Comercial</label>
            <input
              type="text"
              readOnly
              value="Espaço 10"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-semibold cursor-not-allowed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 font-medium">Tempo de Atuação</label>
            <input
              type="text"
              readOnly
              value="17 anos no segmento de moda"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-semibold cursor-not-allowed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 font-medium">Localização Principal</label>
            <input
              type="text"
              readOnly
              value="Planaltina - GO, Brasil"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-semibold cursor-not-allowed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 font-medium">Instagram Informado</label>
            <input
              type="text"
              readOnly
              value="@espaco_10.pl (~18,9 mil seguidores)"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-semibold cursor-not-allowed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 font-medium">Canal de Atendimento</label>
            <input
              type="text"
              readOnly
              value="WhatsApp Oficial"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-semibold cursor-not-allowed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 font-medium">Abrangência Operacional</label>
            <input
              type="text"
              readOnly
              value="Vendas e envios para todo o Brasil"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-semibold cursor-not-allowed"
            />
          </div>

        </div>
      </div>

      {/* Reset Cache & Storage */}
      <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-white">Resetar Dados do Protótipo</h4>
          <p className="text-[11px] text-gray-400">
            Restaura o catálogo de produtos e os interessados para o estado padrão do demonstrativo.
          </p>
        </div>

        <button
          onClick={handleResetData}
          className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restaurar Padrão</span>
        </button>
      </div>

    </div>
  );
};
