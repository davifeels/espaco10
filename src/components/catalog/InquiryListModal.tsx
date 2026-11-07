import React, { useEffect } from 'react';
import { X, Trash2, MessageSquare, ShoppingBag } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface InquiryListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryListModal: React.FC<InquiryListModalProps> = ({ isOpen, onClose }) => {
  const { inquiryList, removeFromInquiry, setSelectedProduct } = useApp();

  // Keyboard accessibility: ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalDemonstrative = inquiryList.reduce((acc, item) => acc + item.price, 0);

  const handleSendMultiWhatsApp = () => {
    if (inquiryList.length === 0) return;
    const itemsList = inquiryList.map(item => `• ${item.name} (R$ ${item.price.toFixed(2)})`).join('%0A');
    const msg = `Olá Espaço 10! Gostaria de consultar a disponibilidade destas peças que selecionei no catálogo:%0A%0A${itemsList}%0A%0AComo funciona para envio ou retirada?`;
    window.open(`https://api.whatsapp.com/send?phone=5561999999999&text=${msg}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-list-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#0E1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#131620]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-rose-600/20 border border-rose-500/30 text-rose-400" aria-hidden="true">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 id="inquiry-list-title" className="font-bold text-white font-heading">
                Minha Lista de Consulta
              </h3>
              <p className="text-xs text-gray-400">
                {inquiryList.length} {inquiryList.length === 1 ? 'peça selecionada' : 'peças selecionadas'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-rose-500"
            aria-label="Fechar lista de consulta"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {inquiryList.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-zinc-800 flex items-center justify-center text-gray-500" aria-hidden="true">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="text-sm text-gray-300 font-medium">Sua lista está vazia</p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Explore as peças no catálogo e clique em "Salvar na Lista" para consultar todas juntas pelo WhatsApp.
              </p>
            </div>
          ) : (
            inquiryList.map((product) => (
              <div 
                key={product.id}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div 
                  className="flex items-center gap-3 cursor-pointer flex-1 focus-visible:ring-2 focus-visible:ring-rose-500"
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver detalhes de ${product.name}`}
                  onClick={() => {
                    setSelectedProduct(product);
                    onClose();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedProduct(product);
                      onClose();
                    }
                  }}
                >
                  <img 
                    src={product.images[0]} 
                    alt={`Foto de ${product.name}`} 
                    className="w-14 h-16 rounded-lg object-cover bg-zinc-800"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white line-clamp-1 hover:text-rose-400 transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-[11px] text-zinc-400">{product.category}</span>
                    <div className="text-xs font-mono font-bold text-white mt-1">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromInquiry(product.id)}
                  className="p-2 text-zinc-500 hover:text-rose-400 hover:bg-white/5 rounded-lg transition-colors ml-2 focus-visible:ring-2 focus-visible:ring-rose-500"
                  title="Remover peça da lista"
                  aria-label={`Remover ${product.name} da lista`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {inquiryList.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-[#131620] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Total Demonstrativo Estimado:</span>
              <span className="text-lg font-bold text-white font-mono">
                R$ {totalDemonstrative.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button
              onClick={handleSendMultiWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>Consultar Toda a Lista no WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
