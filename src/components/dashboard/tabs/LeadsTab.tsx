import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MessageSquare, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  X,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { LeadStatus } from '../../../types';

export const LeadsTab: React.FC = () => {
  const { leads, updateLeadStatus, startOrOpenChatForLead } = useApp();

  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('Todos');

  const statusOptions: LeadStatus[] = [
    'Novo interessado',
    'Em atendimento',
    'Aguardando resposta',
    'Interesse confirmado',
    'Compra concluída',
    'Sem interesse',
  ];

  const statusStyles: Record<LeadStatus, { bg: string; text: string; border: string }> = {
    'Novo interessado': { bg: 'bg-blue-500/15', text: 'text-blue-300', border: 'border-blue-500/30' },
    'Em atendimento': { bg: 'bg-amber-500/15', text: 'text-amber-300', border: 'border-amber-500/30' },
    'Aguardando resposta': { bg: 'bg-purple-500/15', text: 'text-purple-300', border: 'border-purple-500/30' },
    'Interesse confirmado': { bg: 'bg-teal-500/15', text: 'text-teal-300', border: 'border-teal-500/30' },
    'Compra concluída': { bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30' },
    'Sem interesse': { bg: 'bg-zinc-800', text: 'text-zinc-400', border: 'border-zinc-700' },
  };

  const filteredLeads = leads.filter(l => {
    if (selectedStatus !== 'Todos' && l.status !== selectedStatus) return false;
    if (search.trim() !== '') {
      const q = search.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.productName.toLowerCase().includes(q) ||
        l.phone.includes(q) ||
        l.channel.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white font-heading">
              Gestão de Interessados (CRM Comercial)
            </h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
              {leads.length} Oportunidades
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Organização dos clientes que consultaram peças pelo Catálogo, Instagram ou WhatsApp.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar por nome, produto ou telefone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
          <button
            onClick={() => setSelectedStatus('Todos')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedStatus === 'Todos' ? 'bg-rose-600 text-white' : 'bg-zinc-900 text-gray-400 hover:text-white'
            }`}
          >
            Todos ({leads.length})
          </button>
          {statusOptions.map(st => {
            const count = leads.filter(l => l.status === st).length;
            return (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedStatus === st ? 'bg-rose-600 text-white' : 'bg-zinc-900 text-gray-400 hover:text-white'
                }`}
              >
                {st} ({count})
              </button>
            );
          })}
        </div>

      </div>

      {/* CRM Leads Table */}
      <div className="rounded-2xl bg-[#11131B] border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#151824] border-b border-white/10 text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Cliente Fictício</th>
                <th className="py-3.5 px-4">Peça de Interesse</th>
                <th className="py-3.5 px-4">Tam. / Cor</th>
                <th className="py-3.5 px-4">Canal / Data</th>
                <th className="py-3.5 px-4">Status da Oportunidade</th>
                <th className="py-3.5 px-4">Próxima Ação Sugerida</th>
                <th className="py-3.5 px-4 text-right">Atendimento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {filteredLeads.map((l) => {
                const style = statusStyles[l.status] || statusStyles['Novo interessado'];

                return (
                  <tr key={l.id} className="hover:bg-white/[0.02] transition-colors">
                    
                    {/* Client */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{l.name}</div>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400 font-mono mt-0.5">
                        <Phone className="w-3 h-3 text-emerald-400" />
                        <span>{l.phone}</span>
                      </div>
                    </td>

                    {/* Product */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        {l.productImage && (
                          <img src={l.productImage} alt={l.productName} className="w-9 h-11 rounded object-cover bg-zinc-800" />
                        )}
                        <div>
                          <div className="font-bold text-white line-clamp-1">{l.productName}</div>
                          <div className="font-mono text-[10px] text-gray-400">
                            R$ {l.value.toFixed(2).replace('.', ',')}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Size & Color */}
                    <td className="py-3.5 px-4">
                      <div className="font-mono font-bold text-rose-300">{l.size}</div>
                      {l.color && <div className="text-[10px] text-gray-400">{l.color}</div>}
                    </td>

                    {/* Channel & Date */}
                    <td className="py-3.5 px-4">
                      <div className="text-gray-300 font-medium">{l.channel}</div>
                      <span className="text-[10px] text-gray-500 font-mono">{l.date}</span>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-3.5 px-4">
                      <div className="relative inline-block">
                        <select
                          value={l.status}
                          onChange={(e) => updateLeadStatus(l.id, e.target.value as LeadStatus)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border cursor-pointer focus:outline-none ${style.bg} ${style.text} ${style.border}`}
                        >
                          {statusOptions.map(st => (
                            <option key={st} value={st} className="bg-zinc-900 text-white">
                              {st}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>

                    {/* Next Action */}
                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="text-gray-300 text-[11px] line-clamp-2 leading-tight">
                        {l.nextAction}
                      </p>
                    </td>

                    {/* Action: Open Chat */}
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => startOrOpenChatForLead(l.id)}
                        className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow transition-colors"
                        title="Abrir Conversa na Central"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Conversar</span>
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
