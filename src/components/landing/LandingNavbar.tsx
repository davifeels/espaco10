import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  LayoutDashboard, 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';
import { Espaco10Logo } from '../brand/Espaco10Logo';
import { useApp } from '../../context/AppContext';

interface LandingNavbarProps {
  onOpenInquiryList: () => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({ onOpenInquiryList }) => {
  const { setView, setDashboardTab, inquiryList, setIsBrandGuideOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: '17 Anos', href: '#sobre' },
    { label: 'Coleções', href: '#colecoes' },
    { label: 'Catálogo Digital', href: '#catalogo' },
    { label: 'Como Comprar', href: '#experiencia' },
    { label: 'Envios', href: '#envios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C10]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Pill */}
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center group">
              <Espaco10Logo variant="horizontal" theme="dark" size="sm" />
            </a>
            <button
              onClick={() => setIsBrandGuideOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30 hover:bg-rose-500/25 transition-all cursor-pointer"
              title="Visualizar estudo de modernização e guia da nova identidade visual"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Ver Nova Identidade</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold tracking-wider uppercase text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-rose-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Inquiry List Button */}
            <button
              onClick={onOpenInquiryList}
              className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              title="Ver Peças Salvas"
            >
              <ShoppingBag className="w-4 h-4" />
              {inquiryList.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {inquiryList.length}
                </span>
              )}
            </button>

            {/* Switch to Admin Dashboard */}
            <button
              onClick={() => {
                setView('dashboard');
                setDashboardTab('overview');
              }}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold transition-all shadow-lg shadow-rose-950/40 hover:scale-[1.02]"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Painel do Lojista</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] bg-black/30 text-rose-200 uppercase font-mono">
                Commerce
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1117] border-b border-white/10 px-6 py-6 space-y-4 animate-fadeIn">
          <button
            onClick={() => {
              setIsBrandGuideOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-rose-600/15 border border-rose-500/30 text-rose-300 text-xs font-semibold"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Guia da Nova Identidade Visual
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-rose-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setView('dashboard');
                setDashboardTab('overview');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-600 text-white text-xs font-bold"
            >
              <LayoutDashboard className="w-4 h-4" />
              Acessar Painel do Lojista (Commerce)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
