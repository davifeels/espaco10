import React, { useState, useEffect } from 'react';
import { 
  X, 
  Palette, 
  Type, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Tag,
  ShoppingBag,
  Smartphone,
  Award
} from 'lucide-react';
import { Espaco10Logo } from './Espaco10Logo';
import { useApp } from '../../context/AppContext';
import originalLogoImg from '../../assets/original-logo.png';

export const BrandGuideModal: React.FC = () => {
  const { isBrandGuideOpen, setIsBrandGuideOpen } = useApp();
  const [activeTab, setActiveTab] = useState<'comparison' | 'applications' | 'palette' | 'typography'>('comparison');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Accessible keyboard ESC close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBrandGuideOpen) {
        setIsBrandGuideOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBrandGuideOpen, setIsBrandGuideOpen]);

  if (!isBrandGuideOpen) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const palette = [
    { name: 'Vermelho Carmim Alta-Moda', hex: '#E11D48', usage: 'Acento Primário, Badge 10, CTAs e Tags de Luxo' },
    { name: 'Preto Ônix Editorial', hex: '#0B0C10', usage: 'Fundo Master Dark, Solidez da Marca' },
    { name: 'Carvão Urbano', hex: '#161922', usage: 'Superfícies de Cards, Painéis e Headers' },
    { name: 'Grafite Metálico', hex: '#262D3D', usage: 'Bordas Sutis e Divisórias' },
    { name: 'Branco Platina Neve', hex: '#F8F9FA', usage: 'Tipografia de Contraste e Fundo Light' },
    { name: 'Cinza Névoa', hex: '#9CA3AF', usage: 'Metadados, Legendas e Apoio Tipográfico' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-guide-title"
      onClick={() => setIsBrandGuideOpen(false)}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#0F1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141721]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-rose-800 flex items-center justify-center text-white shadow-lg shadow-rose-900/40" aria-hidden="true">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="brand-guide-title" className="text-lg font-bold text-white font-heading">
                  Guia Oficial de Identidade Visual &amp; Redesign
                </h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Proposta Conceitual Premium
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Evolução da marca Espaço 10 (17 Anos de História • Planaltina-GO)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsBrandGuideOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-rose-500"
            aria-label="Fechar Guia de Identidade Visual"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#11131B] px-6 gap-2 sm:gap-6 overflow-x-auto" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'comparison'}
            onClick={() => setActiveTab('comparison')}
            className={`flex items-center gap-2 py-3.5 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-rose-500 ${
              activeTab === 'comparison'
                ? 'border-rose-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Award className="w-4 h-4 text-rose-500" aria-hidden="true" />
            Evolução da Marca (Antes x Depois)
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'applications'}
            onClick={() => setActiveTab('applications')}
            className={`flex items-center gap-2 py-3.5 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-rose-500 ${
              activeTab === 'applications'
                ? 'border-rose-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Layers className="w-4 h-4 text-rose-500" aria-hidden="true" />
            Variações &amp; Aplicações
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'palette'}
            onClick={() => setActiveTab('palette')}
            className={`flex items-center gap-2 py-3.5 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-rose-500 ${
              activeTab === 'palette'
                ? 'border-rose-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Palette className="w-4 h-4 text-rose-500" aria-hidden="true" />
            Paleta Cromática
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'typography'}
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-2 py-3.5 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-rose-500 ${
              activeTab === 'typography'
                ? 'border-rose-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Type className="w-4 h-4 text-rose-500" aria-hidden="true" />
            Tipografia Editorial
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-gray-300">
          
          {/* TAB 1: COMPARISON ANTES X DEPOIS */}
          {activeTab === 'comparison' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Logo Original */}
                <div className="p-5 rounded-xl bg-black/60 border border-white/10 flex flex-col items-center justify-between">
                  <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                      1. Identidade Original Analisada
                    </span>
                    <span className="text-[10px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                      Referência @espaco_10.pl
                    </span>
                  </div>

                  <div className="my-6 p-4 rounded-xl bg-[#08090C] border border-gray-800 flex items-center justify-center w-full max-w-sm aspect-video overflow-hidden">
                    <img 
                      src={originalLogoImg} 
                      alt="Logotipo original oficial da loja Espaço 10 em fundo preto" 
                      className="max-h-36 object-contain"
                    />
                  </div>

                  <div className="w-full text-xs space-y-2 text-gray-400">
                    <div className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold" aria-hidden="true">•</span>
                      <span>Traço fino de contorno duplo (estilo tuning/anos 2000), com legibilidade reduzida em telas móveis e favicons.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold" aria-hidden="true">•</span>
                      <span>Símbolo circular à esquerda com muitas linhas concorrentes.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold" aria-hidden="true">•</span>
                      <span>Linha horizontal solta no topo que sobrecarrega a composição editorial.</span>
                    </div>
                  </div>
                </div>

                {/* Logo Proposta Redesenhada */}
                <div className="p-5 rounded-xl bg-gradient-to-b from-rose-950/20 to-black/80 border border-rose-500/30 flex flex-col items-center justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

                  <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold tracking-wider text-rose-400 uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      2. Nova Identidade Proposta (2026)
                    </span>
                    <span className="text-[10px] bg-rose-500/30 text-rose-200 px-2 py-0.5 rounded font-semibold">
                      Moderna &amp; Editorial
                    </span>
                  </div>

                  <div className="my-6 p-6 rounded-xl bg-[#08090C] border border-rose-900/40 flex items-center justify-center w-full max-w-sm aspect-video">
                    <Espaco10Logo variant="horizontal" theme="dark" size="lg" />
                  </div>

                  <div className="w-full text-xs space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>Monograma E10 Arquitetônico:</strong> Síntese minimalista com corte preciso, alta legibilidade e aplicação versátil.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>Tipografia Syne 800:</strong> Proporções sólidas de alta moda contemporânea, transmitindo autoridade e sofisticação.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>Preservação do DNA:</strong> O número "10" em vermelho carmim mantém a força histórica dos 17 anos da marca.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rationale Banner */}
              <div className="p-4 rounded-xl bg-[#141721] border border-white/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-white">Conceito de Design: O Encontro da Força Urbana com a Elegância</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    A Espaço 10 atua há 17 anos com moda masculina e feminina em Planaltina-GO e para todo o Brasil. O redesign eleva o valor percebido da marca, permitindo que dialogue tanto com clientes que buscam alfaiataria e vestidos elegantes quanto com o público apaixonado por streetwear refinado.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: APPLICATIONS */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Horizontal Dark */}
                <div className="p-4 rounded-xl bg-[#090A0E] border border-white/10 flex flex-col items-center justify-between min-h-[160px]">
                  <span className="text-[11px] font-semibold text-gray-400 mb-2">Versão Horizontal (Fundo Escuro)</span>
                  <div className="my-auto">
                    <Espaco10Logo variant="horizontal" theme="dark" size="sm" />
                  </div>
                  <span className="text-[10px] text-gray-500">Uso: Header Web, Telas Dark</span>
                </div>

                {/* Horizontal Light */}
                <div className="p-4 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-between min-h-[160px]">
                  <span className="text-[11px] font-semibold text-gray-600 mb-2">Versão Horizontal (Fundo Claro)</span>
                  <div className="my-auto">
                    <Espaco10Logo variant="horizontal" theme="light" size="sm" />
                  </div>
                  <span className="text-[10px] text-gray-400">Uso: Notas fiscais, sacolas claras</span>
                </div>

                {/* Stacked Vertical */}
                <div className="p-4 rounded-xl bg-[#090A0E] border border-white/10 flex flex-col items-center justify-between min-h-[160px]">
                  <span className="text-[11px] font-semibold text-gray-400 mb-2">Versão Vertical / Stacked</span>
                  <div className="my-auto">
                    <Espaco10Logo variant="stacked" theme="dark" size="sm" showTagline={false} />
                  </div>
                  <span className="text-[10px] text-gray-500">Uso: Totens, Vitrine e Fachada</span>
                </div>

                {/* Monogram / Icon */}
                <div className="p-4 rounded-xl bg-[#090A0E] border border-white/10 flex flex-col items-center justify-between min-h-[160px]">
                  <span className="text-[11px] font-semibold text-gray-400 mb-2">Monograma E10 / Favicon</span>
                  <div className="my-auto">
                    <Espaco10Logo variant="icon" theme="dark" size="md" />
                  </div>
                  <span className="text-[10px] text-gray-500">Uso: Favicon, Avatar Instagram, Botão</span>
                </div>
              </div>

              {/* Realistic Mockups Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Garment Tag Mockup */}
                <div className="p-5 rounded-xl bg-[#141722] border border-white/10 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-rose-400 text-xs font-semibold">
                    <Tag className="w-4 h-4" aria-hidden="true" />
                    Etiqueta de Roupa &amp; Tag de Luxo
                  </div>
                  <div className="bg-[#0B0C10] p-6 rounded-lg border border-white/15 flex flex-col items-center text-center my-auto shadow-inner">
                    <div className="w-3 h-3 rounded-full border border-gray-600 mb-4" aria-hidden="true" />
                    <Espaco10Logo variant="stacked" theme="dark" size="sm" />
                    <div className="border-t border-dashed border-gray-700 w-full my-3" aria-hidden="true" />
                    <span className="text-[9px] uppercase tracking-widest text-gray-400">100% Algodão Nobre • Tam. M</span>
                    <span className="text-[9px] text-gray-500 mt-1">Feito para durar • Planaltina-GO</span>
                  </div>
                </div>

                {/* Premium Shopping Bag Mockup */}
                <div className="p-5 rounded-xl bg-[#141722] border border-white/10 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-rose-400 text-xs font-semibold">
                    <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                    Sacola de Compra &amp; Embalagem
                  </div>
                  <div className="bg-[#1E222B] p-6 rounded-lg border border-white/15 flex flex-col items-center text-center my-auto shadow-xl relative overflow-hidden">
                    <div className="w-20 h-5 border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t-lg mb-2 opacity-60" aria-hidden="true" />
                    <Espaco10Logo variant="horizontal" theme="dark" size="sm" />
                    <span className="text-[8px] tracking-[0.3em] uppercase text-rose-400 font-bold mt-3">
                      Envios para Todo o Brasil
                    </span>
                  </div>
                </div>

                {/* Instagram Profile Avatar */}
                <div className="p-5 rounded-xl bg-[#141722] border border-white/10 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-rose-400 text-xs font-semibold">
                    <Smartphone className="w-4 h-4" aria-hidden="true" />
                    Avatar Instagram (@espaco_10.pl)
                  </div>
                  <div className="bg-[#0B0C10] p-4 rounded-lg border border-white/15 flex items-center gap-3 my-auto">
                    <div className="p-0.5 rounded-full bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600" aria-hidden="true">
                      <div className="p-1 rounded-full bg-black">
                        <Espaco10Logo variant="icon" theme="dark" size="sm" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        espaco_10.pl
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 inline" aria-hidden="true" />
                      </div>
                      <div className="text-[10px] text-gray-400">18,9 mil seguidores • Moda 17 Anos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PALETTE */}
          {activeTab === 'palette' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {palette.map((color) => (
                  <div 
                    key={color.hex}
                    className="p-4 rounded-xl bg-[#131620] border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div 
                        className="w-full h-20 rounded-lg shadow-inner mb-3 border border-white/10 flex items-end justify-end p-2"
                        style={{ backgroundColor: color.hex }}
                      >
                        <button
                          onClick={() => copyToClipboard(color.hex)}
                          className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 hover:bg-black transition-colors focus-visible:ring-2 focus-visible:ring-white"
                          title="Copiar Código Hex"
                          aria-label={`Copiar código hex ${color.hex}`}
                        >
                          {copiedColor === color.hex ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                              Copiado!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" aria-hidden="true" />
                              {color.hex}
                            </>
                          )}
                        </button>
                      </div>
                      <h4 className="font-semibold text-white text-sm">{color.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#11141E] border border-white/10 text-xs text-gray-400 space-y-2">
                <h4 className="font-semibold text-white">Equilíbrio de Cores na Experiência Espaço 10:</h4>
                <p>
                  A proporção cromática segue a regra editorial <strong>70% Preto Ônix &amp; Carvão</strong> (elegância e foco nas fotografias de roupa), <strong>20% Branco Platina</strong> (legibilidade e respiro visual) e <strong>10% Vermelho Carmim</strong> (energia, destaque de conversão e ancoragem histórica do numeral 10).
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Syne */}
                <div className="p-6 rounded-xl bg-[#12151F] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs uppercase font-bold text-rose-400 tracking-wider">
                      Tipografia Primária (Display &amp; Títulos)
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">Google Fonts: Syne</span>
                  </div>

                  <div className="space-y-2 font-heading">
                    <div className="text-3xl font-extrabold text-white tracking-tight">
                      Syne ExtraBold 800
                    </div>
                    <p className="text-xl font-bold text-gray-300">
                      Seu estilo. Sua identidade. Seu espaço.
                    </p>
                    <div className="text-sm font-semibold text-rose-400 tracking-widest uppercase">
                      ESPAÇO 10 EXPERIENCE • COLEÇÃO 2026
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    A fonte Syne traz um desenho geométrico autêntico, esculpido com personalidade marcante. Transmite imponência de alta-costura contemporânea sem recorrer a clichês.
                  </p>
                </div>

                {/* Plus Jakarta Sans */}
                <div className="p-6 rounded-xl bg-[#12151F] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs uppercase font-bold text-rose-400 tracking-wider">
                      Tipografia Secundária (Corpo, UI &amp; Métricas)
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">Google Fonts: Plus Jakarta Sans</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg font-bold text-white">
                      Plus Jakarta Sans (Medium &amp; Bold)
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      "Descubra uma experiência de moda que conecta estilo, personalidade e praticidade com atendimento humanizado via WhatsApp e envios para todo o Brasil."
                    </p>
                    <div className="font-mono text-xs text-emerald-400">
                      R$ 349,90 • Tam: PP, P, M, G, GG • 14 em estoque
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    Desenhada para legibilidade máxima em interfaces modernas, a Plus Jakarta Sans oferece clareza e ritmo tanto em telas retina de smartphones quanto em dashboards densos.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#141721]">
          <span className="text-xs text-gray-400">
            Direção Criativa: <strong>Davi Anderson</strong> • Antigravity Lead Designer
          </span>
          <button
            onClick={() => setIsBrandGuideOpen(false)}
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-rose-900/30 focus-visible:ring-2 focus-visible:ring-white"
          >
            Concluir &amp; Explorar Plataforma
          </button>
        </div>

      </div>
    </div>
  );
};
