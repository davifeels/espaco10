import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  MessageSquare, 
  RotateCcw, 
  Send, 
  BarChart3, 
  Settings, 
  ArrowLeft, 
  Sparkles, 
  Menu, 
  X, 
  Bell, 
  ExternalLink,
  ShieldCheck,
  Palette
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Espaco10Logo } from '../brand/Espaco10Logo';
import { OverviewTab } from './tabs/OverviewTab';
import { ProductsTab } from './tabs/ProductsTab';
import { LeadsTab } from './tabs/LeadsTab';
import { ChatTab } from './tabs/ChatTab';
import { RecoveryTab } from './tabs/RecoveryTab';
import { CampaignsTab } from './tabs/CampaignsTab';
import { ReportsTab } from './tabs/ReportsTab';
import { SettingsTab } from './tabs/SettingsTab';

export const DashboardLayout: React.FC = () => {
  const { 
    view, 
    setView, 
    dashboardTab, 
    setDashboardTab, 
    leads, 
    conversations, 
    setIsBrandGuideOpen 
  } = useApp();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Visão Geral', icon: LayoutDashboard },
    { id: 'products', label: 'Produtos & Catálogo', icon: ShoppingBag },
    { id: 'leads', label: 'Interessados (CRM)', icon: Users, badge: leads.length },
    { id: 'chat', label: 'Central de Atendimento', icon: MessageSquare, badge: conversations.length },
    { id: 'recovery', label: 'Recuperação de Oportunidades', icon: RotateCcw },
    { id: 'campaigns', label: 'Campanhas & Relacionamento', icon: Send },
    { id: 'reports', label: 'Relatórios Comerciais', icon: BarChart3 },
    { id: 'brand', label: 'Configurações & Marca', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#07080B] text-[#E5E7EB] flex flex-col antialiased">
      
      {/* Top Header */}
      <header className="h-16 bg-[#0E1017] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
        
        {/* Left: Hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2">
            <Espaco10Logo variant="icon" theme="dark" size="sm" />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm tracking-wider font-heading text-white">
                ESPAÇO 10 <span className="text-rose-500 font-mono text-xs">COMMERCE</span>
              </span>
              <span className="text-[9px] text-gray-400 font-mono">
                Painel Comercial • Planaltina-GO
              </span>
            </div>
          </div>
        </div>

        {/* Center / Right: Switch to Store & Brand Guide */}
        <div className="flex items-center gap-3">
          
          <button
            onClick={() => setIsBrandGuideOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Guia da Nova Logo</span>
          </button>

          {/* Switch to Landing Page */}
          <button
            onClick={() => setView('landing')}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            title="Voltar para a Vitrine Pública"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-rose-400" />
            <span>Ver Vitrine / Loja</span>
          </button>

          {/* User Badge */}
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-white/10">
            <div className="w-8 h-8 rounded-full bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-300 font-bold text-xs">
              E10
            </div>
            <div className="text-left text-xs leading-tight">
              <div className="text-white font-semibold">Espaço 10 Atendimento</div>
              <div className="text-[10px] text-emerald-400 font-mono">Equipe Ativa</div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-[#0A0C11] border-r border-white/10 p-4 justify-between select-none">
          
          <div className="space-y-6">
            <div className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-left">
              Gestão Comercial &amp; Vendas
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = dashboardTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setDashboardTab(item.id as any)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/50'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        isActive ? 'bg-black/30 text-white' : 'bg-zinc-800 text-gray-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Card in Sidebar */}
          <div className="p-3.5 rounded-xl bg-[#11131B] border border-white/10 text-left space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Espaço 10 Experience</span>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Demonstração conceitual para apresentação comercial. 17 anos em Planaltina-GO.
            </p>
          </div>
        </aside>

        {/* Mobile Sidebar Drawer */}
        {mobileSidebarOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex">
            <div className="w-72 bg-[#0A0C11] border-r border-white/10 p-5 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Espaco10Logo variant="icon" theme="dark" size="sm" />
                    <span className="font-bold text-white text-xs font-heading">ESPAÇO 10 COMMERCE</span>
                  </div>
                  <button onClick={() => setMobileSidebarOpen(false)} className="text-gray-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = dashboardTab === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setDashboardTab(item.id as any);
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold ${
                          isActive ? 'bg-rose-600 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge !== undefined && (
                          <span className="text-[10px] font-mono">{item.badge}</span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <button
                onClick={() => {
                  setView('landing');
                  setMobileSidebarOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para a Loja</span>
              </button>
            </div>
            <div className="flex-1" onClick={() => setMobileSidebarOpen(false)} />
          </div>
        )}

        {/* Main Tab Content View */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {dashboardTab === 'overview' && <OverviewTab />}
            {dashboardTab === 'products' && <ProductsTab />}
            {dashboardTab === 'leads' && <LeadsTab />}
            {dashboardTab === 'chat' && <ChatTab />}
            {dashboardTab === 'recovery' && <RecoveryTab />}
            {dashboardTab === 'campaigns' && <CampaignsTab />}
            {dashboardTab === 'reports' && <ReportsTab />}
            {dashboardTab === 'brand' && <SettingsTab />}
          </div>
        </main>

      </div>
    </div>
  );
};
