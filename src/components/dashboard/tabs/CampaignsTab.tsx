import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  Send, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  X,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { Campaign } from '../../../types';

export const CampaignsTab: React.FC = () => {
  const { campaigns, addCampaign } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [segment, setSegment] = useState('Clientes Moda Feminina (DF/GO)');
  const [channel, setChannel] = useState('WhatsApp VIP + Instagram');
  const [date, setDate] = useState('25/11/2026');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addCampaign({
      name,
      targetSegment: segment,
      channel,
      scheduledDate: date,
      status: 'Agendada',
      recipientsCount: 350,
      openRate: '--',
      clickRate: '--',
      leadsGenerated: 0,
      description: desc || 'Campanha de relacionamento com pré-reserva exclusiva.',
    });

    setIsModalOpen(false);
    setName('');
    setDesc('');
  };

  return (
    <div className="space-y-6 animate-fadeIn text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white font-heading">
              Campanhas &amp; Relacionamento
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              {campaigns.length} Ações Planejadas
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Planejamento de novidades, reposição de estoque e lançamentos comemorativos.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-950/40 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Criar Campanha Demonstrativa</span>
        </button>
      </div>

      {/* LGPD Compliance Warning Card */}
      <div className="p-4 rounded-2xl bg-[#111420] border border-blue-500/20 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-gray-300 space-y-1">
          <h4 className="font-bold text-white">Privacidade &amp; Conformidade LGPD Garantida</h4>
          <p className="text-gray-400 leading-relaxed">
            Todas as mensagens são planejadas para disparos em listas de transmissão autorizadas por opt-in prévio dos clientes da loja. Em todas as comunicações é assegurada a opção imediata de cancelamento ("Responda SAIR"). Sem disparos massivos automatizados não autorizados.
          </p>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((camp) => (
          <div
            key={camp.id}
            className="p-5 rounded-2xl bg-[#11131B] border border-white/10 hover:border-rose-500/40 transition-all flex flex-col justify-between shadow-xl space-y-4"
          >
            <div>
              {/* Top Row */}
              <div className="flex items-start justify-between pb-3 border-b border-white/5">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  camp.status === 'Ativa' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                  camp.status === 'Concluída' ? 'bg-zinc-800 text-gray-400' :
                  'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {camp.status}
                </span>
                <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  {camp.scheduledDate}
                </span>
              </div>

              {/* Title & Segment */}
              <div className="pt-3 space-y-1">
                <h3 className="text-sm font-bold text-white font-heading">
                  {camp.name}
                </h3>
                <div className="text-[11px] text-rose-300 font-medium">
                  {camp.targetSegment}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pt-1">
                  {camp.description}
                </p>
              </div>

              {/* Demonstrative Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 p-3 mt-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center font-mono">
                <div>
                  <div className="text-xs font-bold text-white">{camp.recipientsCount}</div>
                  <div className="text-[9px] text-gray-500 uppercase">Alcance</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-400">{camp.openRate}</div>
                  <div className="text-[9px] text-gray-500 uppercase">Abertura</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-rose-400">{camp.leadsGenerated}</div>
                  <div className="text-[9px] text-gray-500 uppercase">Respostas</div>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 flex items-center justify-between pt-2 border-t border-white/5">
              <span>Canal: {camp.channel}</span>
              <span className="text-emerald-400 font-medium">Simulação Ativa</span>
            </div>
          </div>
        ))}
      </div>

      {/* CREATE CAMPAIGN MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div 
            className="w-full max-w-md bg-[#0E1017] border border-white/15 rounded-2xl shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white font-heading">
                Nova Campanha de Moda Fictícia
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Nome da Ação</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Drop Alto Verão 2026 — Linho &amp; Seda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Segmento de Público</label>
                <input
                  type="text"
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Data Planejada</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Canal de Envio</label>
                  <input
                    type="text"
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Descrição / Mensagem Proposta</label>
                <textarea
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Objetivo e chamada da campanha para os clientes..."
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-gray-300 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold"
                >
                  Salvar Campanha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
