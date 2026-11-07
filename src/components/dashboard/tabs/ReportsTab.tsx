import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Calendar, 
  Check, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';

export const ReportsTab: React.FC = () => {
  const { report, products } = useApp();
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);

  const handleExport = (fmt: 'PDF' | 'CSV') => {
    setDownloadingFormat(fmt);
    setTimeout(() => {
      setDownloadingFormat(null);
      alert(`Relatório demonstrativo exportado com sucesso no formato ${fmt}!`);
    }, 1200);
  };

  return (
    <div className="space-y-6 animate-fadeIn text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#11131B] border border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white font-heading">
              Relatórios &amp; Inteligência Comercial
            </h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Consolidado 30 Dias
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Análise aprofundada de interesse por categoria, ticket médio ilustrativo e taxas de conversão assistida.
          </p>
        </div>

        {/* Export Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleExport('CSV')}
            disabled={!!downloadingFormat}
            className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-gray-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloadingFormat === 'CSV' ? 'Exportando...' : 'Exportar CSV'}</span>
          </button>

          <button
            onClick={() => handleExport('PDF')}
            disabled={!!downloadingFormat}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-rose-950/40 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{downloadingFormat === 'PDF' ? 'Gerando...' : 'Baixar Relatório PDF'}</span>
          </button>
        </div>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-1">
          <span className="text-xs text-gray-400">Total de Contatos Registrados</span>
          <div className="text-2xl font-black text-white font-mono">{report.totalContacts}</div>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            18.4% a mais que o ciclo anterior
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-1">
          <span className="text-xs text-gray-400">Taxa de Conversão Assistida</span>
          <div className="text-2xl font-black text-white font-mono">{report.conversionRate}%</div>
          <span className="text-[10px] text-purple-400">Vendas via WhatsApp</span>
        </div>

        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-1">
          <span className="text-xs text-gray-400">Ticket Médio Demonstrativo</span>
          <div className="text-2xl font-black text-white font-mono">
            R$ {report.averageTicket.toFixed(2).replace('.', ',')}
          </div>
          <span className="text-[10px] text-gray-400">Moda Fem. &amp; Masc.</span>
        </div>

        <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 space-y-1">
          <span className="text-xs text-gray-400">Tempo Médio de Atendimento</span>
          <div className="text-2xl font-black text-white font-mono">4.2 min</div>
          <span className="text-[10px] text-emerald-400">Alta agilidade consultiva</span>
        </div>

      </div>

      {/* Top Products Breakdown */}
      <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 space-y-4">
        <h3 className="text-base font-bold text-white font-heading">
          Produtos com Maior Volume de Consultas
        </h3>
        
        <div className="space-y-3">
          {report.topProducts.map((item, idx) => (
            <div key={item.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="text-rose-400 font-mono">0{idx + 1}.</span>
                  {item.name}
                  <span className="text-[10px] text-gray-500 font-normal">({item.category})</span>
                </span>
                <span className="font-mono text-gray-300 font-bold">
                  {item.count} consultas ({item.percentage}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-rose-600 to-rose-400"
                  style={{ width: `${item.percentage * 3}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Channel Distribution & Regional Reach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Channels */}
        <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white font-heading">
            Origem do Tráfego Comercial
          </h3>
          <div className="space-y-3">
            {report.channelDistribution.map((ch) => (
              <div key={ch.channel} className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                <span className="text-gray-300 font-medium">{ch.channel}</span>
                <span className="font-mono font-bold text-white">{ch.count} contatos ({ch.percentage}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Deliveries */}
        <div className="p-6 rounded-2xl bg-[#11131B] border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white font-heading">
            Destino dos Envios Nacionais (Demonstrativo)
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-gray-300 font-medium">Distrito Federal &amp; Entorno (GO)</span>
              <span className="font-mono font-bold text-rose-400">54% dos envios</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-gray-300 font-medium">Região Sudeste (SP, MG, RJ)</span>
              <span className="font-mono font-bold text-white">26% dos envios</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-gray-300 font-medium">Região Nordeste &amp; Centro-Oeste interior</span>
              <span className="font-mono font-bold text-white">14% dos envios</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="text-gray-300 font-medium">Regiões Sul &amp; Norte</span>
              <span className="font-mono font-bold text-white">6% dos envios</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
