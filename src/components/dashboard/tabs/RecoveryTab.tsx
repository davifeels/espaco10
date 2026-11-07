import React, { useState } from 'react';
import { 
  RotateCcw, 
  Clock, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  Send
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';

export const RecoveryTab: React.FC = () => {
  const { leads, startOrOpenChatForLead, sendMessage } = useApp();
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Filter leads that are waiting for response or in progress with high interaction hours
  const pendingLeads = leads.filter(l => 
    l.status === 'Aguardando resposta' || 
    l.status === 'Em atendimento' ||
    l.status === 'Novo interessado'
  );

  const handleSendRecoveryFollowUp = (leadId: string, leadName: string, productName: string) => {
    startOrOpenChatForLead(leadId);
    setSuccessMsg(`Simulação de mensagem de recuperação enviada para ${leadName}!`);
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="space-y-6 animate-fadeIn text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#11131B] border border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white font-heading">
              Recuperação Ativa de Oportunidades
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {pendingLeads.length} Clientes Pendentes
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Organização inteligente de interessados que não concluíram o atendimento nas últimas 24h a 72h.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Régua de Follow-up Humanizado</span>
        </div>
      </div>

      {successMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Recovery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pendingLeads.map((l) => (
          <div
            key={l.id}
            className="p-5 rounded-2xl bg-[#12151F] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl space-y-4"
          >
            <div>
              {/* Top Row: Lead & Inactive time */}
              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-white">{l.name}</h4>
                  <span className="text-[11px] text-gray-400 font-mono">{l.phone}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {l.lastInteractionHoursAgo}h sem retorno
                </span>
              </div>

              {/* Product Info */}
              <div className="flex items-center gap-3 py-3">
                <img 
                  src={l.productImage} 
                  alt={l.productName} 
                  className="w-12 h-14 rounded-lg object-cover bg-zinc-800"
                />
                <div>
                  <h5 className="text-xs font-bold text-white line-clamp-1">{l.productName}</h5>
                  <div className="text-[11px] text-rose-400 font-mono font-bold">
                    R$ {l.value.toFixed(2).replace('.', ',')}
                  </div>
                  <span className="text-[10px] text-gray-400">Tamanho consultado: {l.size}</span>
                </div>
              </div>

              {/* Next Action Box */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  Ação Recomendada de Follow-up:
                </span>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  {l.nextAction}
                </p>
              </div>
            </div>

            {/* Recovery Action Button */}
            <button
              onClick={() => handleSendRecoveryFollowUp(l.id, l.name, l.productName)}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-amber-950/40"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Mensagem de Recuperação</span>
            </button>
          </div>
        ))}
      </div>

      {/* Rationale Footer */}
      <div className="p-4 rounded-xl bg-[#0D0F16] border border-white/5 text-xs text-gray-400 flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-white">Boas Práticas de Recuperação na Moda:</strong>
          <p className="mt-0.5">
            O envio de fotos adicionais do caimento real gravadas no provador de Planaltina-GO eleva em até 42% a taxa de resposta de clientes que deixaram de responder por dúvida de modelagem.
          </p>
        </div>
      </div>

    </div>
  );
};
