import React from 'react';
import { 
  Users, 
  MessageSquare, 
  ShoppingBag, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Eye, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';

export const OverviewTab: React.FC = () => {
  const { leads, products, conversations, setDashboardTab, startOrOpenChatForLead } = useApp();

  const totalContacts = 487;
  const activeChatsCount = conversations.length;
  const confirmedLeads = leads.filter(l => l.status === 'Interesse confirmado' || l.status === 'Compra concluída').length;
  const conversionRate = ((confirmedLeads / (leads.length || 1)) * 100).toFixed(1);

  // Top Consulted Products
  const topProducts = [...products]
    .sort((a, b) => (b.consultationCount || 0) - (a.consultationCount || 0))
    .slice(0, 4);

  // Channel origins
  const channelData = [
    { label: 'Instagram (@espaco_10.pl)', count: 218, pct: 45, color: '#E11D48' },
    { label: 'Catálogo Digital Espaço 10', count: 165, pct: 34, color: '#3B82F6' },
    { label: 'WhatsApp Direto', count: 72, pct: 15, color: '#10B981' },
    { label: 'Indicações de Clientes', count: 32, pct: 6, color: '#F59E0B' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn text-left">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#171B26] via-[#12141C] to-[#19131C] border border-white/10 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white font-heading">
              Visão Geral Comercial
            </h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Dados Demonstrativos
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Painel de controle em tempo real do ecossistema Espaço 10 Experience (Planaltina-GO).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDashboardTab('chat')}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-950/40 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Central de Atendimento ({activeChatsCount})</span>
          </button>
        </div>
      </div>

      {/* KPI Stat Cards (6 Key Indicators) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        
        {/* KPI 1 */}
        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Contatos no Mês</span>
            <div className="p-1.5 rounded-lg bg-rose-500/15 text-rose-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">{totalContacts}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400">
            <ArrowUpRight className="w-3 h-3" />
            <span>+18.4% vs mês anterior</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Conversas Ativas</span>
            <div className="p-1.5 rounded-lg bg-blue-500/15 text-blue-400">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">{conversations.length}</div>
          <div className="flex items-center gap-1 text-[11px] text-gray-400">
            <Clock className="w-3 h-3 text-blue-400" />
            <span>Tempo médio: 4 min</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Oportunidades</span>
            <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">{leads.length}</div>
          <div className="flex items-center gap-1 text-[11px] text-amber-400">
            <span>{leads.filter(l => l.status === 'Novo interessado').length} novos hoje</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Pedidos Simulados</span>
            <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">142</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400">
            <ArrowUpRight className="w-3 h-3" />
            <span>+12.6% no período</span>
          </div>
        </div>

        {/* KPI 5 */}
        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Taxa de Conversão</span>
            <div className="p-1.5 rounded-lg bg-purple-500/15 text-purple-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">{conversionRate}%</div>
          <div className="flex items-center gap-1 text-[11px] text-purple-400">
            <span>WhatsApp Assistido</span>
          </div>
        </div>

        {/* KPI 6 */}
        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Ticket Médio</span>
            <div className="p-1.5 rounded-lg bg-rose-500/15 text-rose-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono">R$ 278</div>
          <div className="flex items-center gap-1 text-[11px] text-gray-400">
            <span>Moda Fem. &amp; Masc.</span>
          </div>
        </div>

      </div>

      {/* Main Charts & Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Weekly Contact Evolution Chart (8 cols) */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-[#11131B] border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Evolução Semanal de Contatos &amp; Vendas Demonstrativas
              </h3>
              <p className="text-xs text-gray-400">
                Acompanhamento diário de interessados que chegaram ao WhatsApp
              </p>
            </div>
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg">
              Semana Atual
            </span>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-56 flex items-end justify-between gap-2 sm:gap-4 pt-6 px-2 border-b border-zinc-800">
            {[
              { day: 'Seg', leads: 16, closed: 5 },
              { day: 'Ter', leads: 22, closed: 7 },
              { day: 'Qua', leads: 25, closed: 8 },
              { day: 'Qui', leads: 31, closed: 9 },
              { day: 'Sex', leads: 42, closed: 14 },
              { day: 'Sáb', leads: 48, closed: 16 },
              { day: 'Dom', leads: 18, closed: 4 },
            ].map((col) => {
              const maxLeads = 50;
              const leadHeightPct = Math.round((col.leads / maxLeads) * 100);
              const closedHeightPct = Math.round((col.closed / maxLeads) * 100);

              return (
                <div key={col.day} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                  <div className="w-full flex items-end justify-center gap-1.5 h-44">
                    {/* Leads bar */}
                    <div 
                      className="w-1/2 max-w-[20px] bg-zinc-700 group-hover:bg-rose-600 rounded-t-md transition-all relative"
                      style={{ height: `${leadHeightPct}%` }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-black px-1.5 py-0.5 rounded text-[10px] text-white font-mono pointer-events-none transition-opacity">
                        {col.leads}
                      </div>
                    </div>
                    {/* Closed bar */}
                    <div 
                      className="w-1/2 max-w-[20px] bg-rose-500 group-hover:bg-rose-400 rounded-t-md transition-all relative"
                      style={{ height: `${closedHeightPct}%` }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-black px-1.5 py-0.5 rounded text-[10px] text-white font-mono pointer-events-none transition-opacity">
                        {col.closed}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-gray-400">{col.day}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-zinc-700"></div>
              <span>Contatos Iniciados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-rose-500"></div>
              <span>Vendas Concluídas</span>
            </div>
          </div>
        </div>

        {/* Lead Origins Distribution (4 cols) */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-[#11131B] border border-white/10 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-base font-bold text-white font-heading">
              Origem dos Contatos
            </h3>
            <p className="text-xs text-gray-400">
              Distribuição por canal de captação
            </p>
          </div>

          <div className="space-y-4">
            {channelData.map((item) => (
              <div key={item.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">{item.label}</span>
                  <span className="font-mono text-white font-bold">{item.pct}% ({item.count})</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-gray-400 leading-relaxed">
            * O Instagram (@espaco_10.pl) e o Catálogo Digital respondem por quase 80% do fluxo de novas oportunidades.
          </div>
        </div>

      </div>

      {/* Bottom Row: Top Consulted Products & Recent Leads */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Top Products (6 cols) */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-[#11131B] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-heading">
              Produtos Mais Consultados
            </h3>
            <button
              onClick={() => setDashboardTab('products')}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold"
            >
              Ver Catálogo Completo
            </button>
          </div>

          <div className="space-y-3">
            {topProducts.map((p, idx) => (
              <div 
                key={p.id}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 text-center font-mono font-bold text-gray-500 text-xs">
                    0{idx + 1}
                  </span>
                  <img src={p.images[0]} alt={p.name} className="w-10 h-12 rounded-lg object-cover bg-zinc-800" />
                  <div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{p.name}</h4>
                    <span className="text-[10px] text-gray-400">{p.category} • {p.gender}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-rose-400">
                    {p.consultationCount || 50} consultas
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">
                    R$ {p.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Leads Waiting (6 cols) */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-[#11131B] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-heading">
              Últimas Oportunidades Cadastradas
            </h3>
            <button
              onClick={() => setDashboardTab('leads')}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold"
            >
              Ver Tabela CRM
            </button>
          </div>

          <div className="space-y-3">
            {leads.slice(0, 4).map((l) => (
              <div 
                key={l.id}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-300 font-bold text-xs">
                    {l.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{l.name}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{l.phone}</span>
                    </div>
                    <span className="text-[10px] text-rose-300 font-medium line-clamp-1">
                      {l.productName} ({l.size})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    l.status === 'Novo interessado' ? 'bg-blue-500/20 text-blue-300' :
                    l.status === 'Em atendimento' ? 'bg-amber-500/20 text-amber-300' :
                    l.status === 'Compra concluída' ? 'bg-emerald-500/20 text-emerald-300' :
                    'bg-zinc-800 text-gray-300'
                  }`}>
                    {l.status}
                  </span>

                  <button
                    onClick={() => startOrOpenChatForLead(l.id)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-600 text-gray-300 hover:text-white transition-colors"
                    title="Abrir no Chat"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
