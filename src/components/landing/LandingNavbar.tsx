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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'A Marca (17 Anos)', href: '#sobre' },
    { label: 'Coleções', href: '#colecoes' },
    { label: 'Catálogo Digital', href: '#catalogo' },
    { label: 'Experiência de Compra', href: '#experiencia' },
    { label: 'Envios Nacionais', href: '#envios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#07080B]/95 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-6'
      }`}
    >
      {/* 90% Screen Width Container with Generous Breathing Room */}
      <div className="w-[90%] max-w-[1760px] mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Indicator */}
          <div className="flex items-center gap-6 xl:gap-8">
            <a href="#hero" className="flex items-center group focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg">
              <Espaco10Logo variant="horizontal" theme="dark" size="sm" />
            </a>
            
            <div className="hidden xl:block h-6 w-[1px] bg-white/[0.08]" aria-hidden="true" />

            <button
              onClick={() => setIsBrandGuideOpen(true)}
              className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10.5px] font-sans font-medium tracking-[0.16em] uppercase bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:border-red-500/40 hover:text-white transition-all cursor-pointer"
              title="Estudo de modernização e guia editorial da marca"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-500" aria-hidden="true" />
              <span>Manual de Identidade</span>
            </button>
          </div>

          {/* Desktop Navigation Links (Forbes / Luxury Editorial Style with Generous Breathing Room) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-11 text-[11.5px] font-sans font-medium tracking-[0.18em] uppercase text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Icons with Elegant Spacing */}
          <div className="flex items-center gap-4 xl:gap-5">
            {/* Inquiry List Button */}
            <button
              onClick={onOpenInquiryList}
              className="relative p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-colors focus-visible:ring-2 focus-visible:ring-red-500"
              title="Minha Lista de Consulta"
              aria-label="Abrir lista de peças selecionadas"
            >
              <ShoppingBag className="w-4 h-4" />
              {inquiryList.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-700 text-white text-[10px] font-bold font-mono flex items-center justify-center animate-pulse">
                  {inquiryList.length}
                </span>
              )}
            </button>

            {/* Switch to Admin Dashboard (Prestigious Haute Couture Button) */}
            <button
              onClick={() => {
                setView('dashboard');
                setDashboardTab('overview');
              }}
              className="hidden sm:flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 border border-red-700/40 text-white text-xs font-semibold tracking-wide transition-all shadow-xl shadow-red-950/40 hover:scale-[1.02] cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-red-300" aria-hidden="true" />
              <span>Painel do Lojista</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-black/40 text-red-200 uppercase font-mono tracking-wider">
                Commerce
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0C11] border-b border-white/[0.08] px-6 py-6 space-y-4 animate-fadeIn">
          <button
            onClick={() => {
              setIsBrandGuideOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-red-950/30 border border-red-800/30 text-red-200 text-xs font-medium"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-400" />
              Manual da Nova Identidade Visual
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium tracking-[0.1em] uppercase text-zinc-300 hover:text-white py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/[0.08] space-y-2">
            <button
              onClick={() => {
                setView('dashboard');
                setDashboardTab('overview');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-800 hover:bg-red-700 text-white text-xs font-semibold"
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
