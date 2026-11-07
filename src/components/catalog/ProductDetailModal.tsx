import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  ShoppingBag, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Ruler, 
  ArrowRight
} from 'lucide-react';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { 
    handleDirectWhatsAppInquiry, 
    addToInquiry, 
    isInInquiry, 
    addLeadFromInquiry, 
    setView,
    setDashboardTab
  } = useApp();

  const [activeImage, setActiveImage] = useState<string>(product.images[0] || '');
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>(
    product.colors[0] || { name: 'Padrão', hex: '#000000' }
  );
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [addedFeedback, setAddedFeedback] = useState<boolean>(false);

  // Keyboard accessibility: ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleAddInquiry = () => {
    addToInquiry(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleSimulateChat = () => {
    addLeadFromInquiry(product, selectedSize, selectedColor.name, 'Cliente Visitante (Catálogo)');
    onClose();
    setView('dashboard');
    setDashboardTab('chat');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col md:flex-row bg-[#0D0F15] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black transition-colors focus-visible:ring-2 focus-visible:ring-rose-500"
          title="Fechar Detalhes"
          aria-label="Fechar modal de detalhes do produto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Gallery */}
        <div className="w-full md:w-1/2 bg-[#08090C] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/5 group shadow-2xl">
            <img 
              src={activeImage} 
              alt={`Foto da peça ${product.name} da Espaço 10`} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {product.isNew && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-rose-600 text-white shadow-lg">
                Novidade
              </span>
            )}
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-center">
              <span className="text-[10px] text-gray-300 tracking-wide font-medium">
                Fotografia demonstrativa de moda contemporânea
              </span>
            </div>
          </div>

          {/* Thumbnail Bar */}
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-1" role="group" aria-label="Ângulos da fotografia">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  aria-label={`Ver ângulo ${idx + 1} de ${product.name}`}
                  className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    activeImage === img ? 'border-rose-500 scale-105' : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Ângulo ${idx + 1} da peça ${product.name}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-5">
            {/* Category & Badge */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold tracking-wider uppercase bg-zinc-800 text-zinc-300 border border-zinc-700">
                {product.category} • {product.gender}
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                Disponibilidade Demonstrativa
              </span>
            </div>

            {/* Title & Price */}
            <div>
              <h2 id="product-detail-title" className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-gray-500">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
                <span className="text-xs text-rose-400 font-medium">
                  Até 3x sem juros no atendimento
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Fabric Specs */}
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="text-white">Composição &amp; Tecido:</strong> {product.fabric}
              </div>
            </div>

            {/* Colors */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                Cor: <span className="text-white font-normal">{selectedColor.name}</span>
              </label>
              <div className="flex items-center gap-2.5" role="radiogroup" aria-label="Opções de cores">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    role="radio"
                    aria-checked={selectedColor.name === color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-rose-500 ${
                      selectedColor.name === color.name ? 'border-rose-500 scale-110 shadow-lg shadow-rose-950/50' : 'border-zinc-700 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Selecionar cor ${color.name}`}
                  >
                    {selectedColor.name === color.name && (
                      <Check className={`w-4 h-4 ${color.hex === '#FFFFFF' || color.hex === '#F9FAFB' ? 'text-black' : 'text-white'}`} aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Tamanho Selecionado: <span className="text-white">{selectedSize}</span>
                </label>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-rose-500"
                  aria-expanded={showSizeGuide}
                >
                  <Ruler className="w-3.5 h-3.5" aria-hidden="true" />
                  Guia de Medidas
                </button>
              </div>

              {/* Size Pills */}
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Opções de tamanho">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    role="radio"
                    aria-checked={selectedSize === sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border focus-visible:ring-2 focus-visible:ring-rose-500 ${
                      selectedSize === sz
                        ? 'bg-rose-600 border-rose-500 text-white shadow-md shadow-rose-950/40'
                        : 'bg-zinc-900/80 border-zinc-700 text-gray-300 hover:border-gray-500'
                    }`}
                    aria-label={`Tamanho ${sz}`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              {/* Size Guide Drawer */}
              {showSizeGuide && (
                <div className="mt-3 p-3.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-gray-300 space-y-2 animate-fadeIn">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-rose-400" aria-hidden="true" />
                    Tabela de Medidas Médias (cm)
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] pt-1 border-t border-zinc-800">
                    <div className="font-mono text-gray-400">Tam</div>
                    <div className="font-mono text-gray-400">Busto/Tórax</div>
                    <div className="font-mono text-gray-400">Cintura</div>
                    <div className="font-mono text-gray-400">Quadril</div>
                    <div className="font-bold text-white">P (38)</div>
                    <div>86-90 cm</div>
                    <div>68-72 cm</div>
                    <div>94-98 cm</div>
                    <div className="font-bold text-white">M (40)</div>
                    <div>92-96 cm</div>
                    <div>74-78 cm</div>
                    <div>100-104 cm</div>
                    <div className="font-bold text-white">G (42)</div>
                    <div>98-102 cm</div>
                    <div>80-84 cm</div>
                    <div>106-110 cm</div>
                  </div>
                  <p className="text-[10px] text-gray-400 italic">
                    Dúvida com caimento? Nosso atendimento no WhatsApp mede a peça exata para você em Planaltina-GO!
                  </p>
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-gray-400 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-rose-400" aria-hidden="true" />
                <span>Envio para todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-rose-400" aria-hidden="true" />
                <span>Troca orientada sem estresse</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 space-y-3 mt-4 border-t border-white/10">
            {/* Primary WhatsApp Action */}
            <button
              onClick={() => handleDirectWhatsAppInquiry(product, selectedSize, selectedColor.name)}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>Consultar Disponibilidade no WhatsApp</span>
            </button>

            {/* Secondary Actions Row */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={handleAddInquiry}
                className={`py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-white ${
                  isInInquiry(product.id)
                    ? 'bg-zinc-800 border-zinc-600 text-gray-300'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
                }`}
                aria-label="Salvar na lista de consulta"
              >
                <ShoppingBag className="w-4 h-4 text-rose-400" aria-hidden="true" />
                <span>{addedFeedback ? 'Adicionado!' : isInInquiry(product.id) ? 'Na Lista' : 'Salvar na Lista'}</span>
              </button>

              <button
                onClick={handleSimulateChat}
                className="py-2.5 px-4 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/40 text-rose-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-rose-400"
                title="Abre o chat simulado no painel de atendimento do lojista"
              >
                <span>Testar no Painel</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            <p className="text-[10px] text-center text-gray-500">
              * Demonstração comercial conceitual. Valores e produtos ilustrativos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
