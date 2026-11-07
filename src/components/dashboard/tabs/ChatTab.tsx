import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  CheckCheck, 
  Sparkles, 
  ChevronRight, 
  Search, 
  Tag, 
  Ruler, 
  ShieldCheck,
  CreditCard,
  Truck,
  RotateCcw,
  Plus
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { LeadStatus } from '../../../types';

export const ChatTab: React.FC = () => {
  const { 
    conversations, 
    activeConversationId, 
    setActiveConversationId, 
    sendMessage, 
    updateLeadStatus 
  } = useApp();

  const [inputText, setInputText] = useState('');
  const [chatSearch, setChatSearch] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConv = conversations.find(c => c.id === activeConversationId) || conversations[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConv?.messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeConv) return;
    sendMessage(activeConv.id, inputText.trim(), 'agent');
    setInputText('');
  };

  const handleQuickReply = (text: string) => {
    if (!activeConv) return;
    sendMessage(activeConv.id, text, 'agent');
  };

  const quickReplies = [
    { label: 'Tabela de Medidas', text: 'Temos as medidas exatas dessa peça aqui no showroom: Busto 94cm, Cintura 76cm e Comprimento 68cm. O caimento é perfeito no corpo!' },
    { label: 'Envio para DF/GO', text: 'Para o DF e Goiás enviamos com entrega rápida expressa via motoboy ou transportadora! Para outras regiões do Brasil enviamos com código de rastreamento.' },
    { label: 'Disponibilidade de Tamanho', text: 'Sim! Confirmamos em estoque essa peça no tamanho solicitado. Deseja que separemos para você agora mesmo?' },
    { label: 'Chave Pix Demonstrativa', text: 'Maravilha! Você pode efetuar a reserva da peça com nossa chave Pix oficial. Assim que aprovado geramos seu comprovante de envio!' },
  ];

  const filteredConversations = conversations.filter(c => {
    if (!chatSearch.trim()) return true;
    const q = chatSearch.toLowerCase();
    return c.clientName.toLowerCase().includes(q) || c.productName.toLowerCase().includes(q);
  });

  return (
    <div className="rounded-2xl bg-[#0F1118] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[750px] animate-fadeIn text-left">
      
      {/* Top Banner Warning */}
      <div className="bg-[#151824] px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white font-semibold">Central de Atendimento Inteligente</span>
          <span>• Simulação de canal de moda integrada</span>
        </div>
        <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          Simulador Comercial (Sem custos externos)
        </span>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Column: Conversations List (1/3) */}
        <div className="w-80 border-r border-white/10 bg-[#0C0E14] flex flex-col">
          {/* Search Bar */}
          <div className="p-3 border-b border-white/10">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar conversas..."
                value={chatSearch}
                onChange={(e) => setChatSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          {/* Conversations Thread List */}
          <div className="flex-1 overflow-y-auto divide-y divide-zinc-800/60">
            {filteredConversations.map((conv) => {
              const isSelected = conv.id === activeConv?.id;
              const lastMsg = conv.messages[conv.messages.length - 1];

              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveConversationId(conv.id)}
                  className={`p-3 cursor-pointer transition-colors flex items-start gap-3 ${
                    isSelected ? 'bg-rose-950/20 border-l-2 border-rose-500' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={conv.avatar}
                      alt={conv.clientName}
                      className="w-10 h-10 rounded-full object-cover bg-zinc-800"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white truncate">{conv.clientName}</h4>
                      <span className="text-[10px] text-gray-500 font-mono">{conv.updatedAt}</span>
                    </div>

                    <p className="text-[11px] text-rose-300 font-medium truncate mt-0.5">
                      {conv.productName}
                    </p>

                    <p className="text-[11px] text-gray-400 truncate mt-0.5">
                      {lastMsg ? lastMsg.text : 'Conversa iniciada'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Column: Live Chat Panel */}
        <div className="flex-1 flex flex-col bg-[#0A0B0F]">
          {activeConv ? (
            <>
              {/* Active Chat Header */}
              <div className="p-3.5 border-b border-white/10 bg-[#12141C] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={activeConv.avatar}
                    alt={activeConv.clientName}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-white flex items-center gap-2">
                      <span>{activeConv.clientName}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">{activeConv.clientPhone}</span>
                    </h3>
                    <div className="text-[10px] text-gray-400 flex items-center gap-2">
                      <span>Origem: {activeConv.channel}</span>
                      <span>•</span>
                      <span className="text-rose-400">Interesse: {activeConv.productSize}</span>
                    </div>
                  </div>
                </div>

                {/* Status Dropdown */}
                <div className="flex items-center gap-2">
                  <select
                    value={activeConv.status}
                    onChange={(e) => updateLeadStatus(activeConv.leadId, e.target.value as LeadStatus)}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-zinc-900 border border-zinc-700 text-rose-300 focus:outline-none cursor-pointer"
                  >
                    <option value="Novo interessado">Novo interessado</option>
                    <option value="Em atendimento">Em atendimento</option>
                    <option value="Aguardando resposta">Aguardando resposta</option>
                    <option value="Interesse confirmado">Interesse confirmado</option>
                    <option value="Compra concluída">Compra concluída</option>
                    <option value="Sem interesse">Sem interesse</option>
                  </select>
                </div>
              </div>

              {/* Messages Flow Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:16px_16px]">
                {activeConv.messages.map((msg) => {
                  const isAgent = msg.sender === 'agent';

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isAgent ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed shadow-md ${
                          isAgent
                            ? 'bg-gradient-to-r from-rose-700 to-rose-600 text-white rounded-tr-none'
                            : 'bg-[#181B26] border border-white/10 text-gray-200 rounded-tl-none'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <div
                          className={`flex items-center justify-end gap-1 text-[9px] mt-1.5 font-mono ${
                            isAgent ? 'text-rose-200' : 'text-gray-400'
                          }`}
                        >
                          <span>{msg.timestamp}</span>
                          {isAgent && <CheckCheck className="w-3 h-3 text-rose-200" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Reply Shortcuts */}
              <div className="px-4 py-2 border-t border-white/5 bg-[#0F1118] flex items-center gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[10px] text-gray-500 uppercase font-bold flex-shrink-0">
                  Respostas Rápidas:
                </span>
                {quickReplies.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => handleQuickReply(qr.text)}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-zinc-800 hover:bg-rose-600/30 hover:text-rose-200 border border-zinc-700 text-gray-300 transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer"
                  >
                    + {qr.label}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-[#12141C] flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Digite sua resposta para o cliente da Espaço 10..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white transition-colors cursor-pointer"
                  title="Enviar Mensagem"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-xs">
              Selecione uma conversa para visualizar
            </div>
          )}
        </div>

        {/* Right Column: Customer & Consulted Product Info Panel (1/4) */}
        {activeConv && (
          <div className="hidden lg:flex w-72 border-l border-white/10 bg-[#0C0E14] p-4 flex-col justify-between space-y-4 text-xs">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider pb-2 border-b border-white/10">
                <Tag className="w-3.5 h-3.5 text-rose-500" />
                Peça em Negociação
              </div>

              {/* Product Card */}
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                <img
                  src={activeConv.productImage}
                  alt={activeConv.productName}
                  className="w-full aspect-[4/3] rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold text-white line-clamp-2">{activeConv.productName}</h4>
                  <div className="text-[11px] text-rose-400 font-mono font-bold mt-1">
                    R$ {activeConv.productPrice.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    Tamanho / Cor: {activeConv.productSize}
                  </div>
                </div>
              </div>

              {/* Customer summary */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="text-[10px] font-semibold text-gray-400 uppercase">
                  Ficha do Cliente
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="text-white font-medium">{activeConv.clientName}</div>
                  <div className="text-gray-400 font-mono">{activeConv.clientPhone}</div>
                  <div className="text-gray-500">Canal: {activeConv.channel}</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-rose-600/10 border border-rose-500/20 text-[10px] text-rose-300 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                Atendimento Humanizado
              </div>
              <p>Envie medidas da fita métrica e grave provador em vídeo para aumentar a conversão!</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
