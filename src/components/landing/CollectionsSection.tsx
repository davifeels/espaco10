import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CollectionsSection: React.FC = () => {
  const { setFilterCategory } = useApp();

  const collections = [
    {
      id: 'fem',
      title: 'Moda Feminina',
      subtitle: 'Alfaiataria fluida, vestidos e conjuntos contemporâneos',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      badge: 'Linha Principal',
      categoryTarget: 'Feminino',
      countText: 'Vestidos, Blazers & Wide Legs',
    },
    {
      id: 'masc',
      title: 'Moda Masculina',
      subtitle: 'Camisaria em linho nobre e caimento casual chic',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      badge: 'Essenciais',
      categoryTarget: 'Masculino',
      countText: 'Linho Puro, Slim & Polo',
    },
    {
      id: 'street',
      title: 'Streetwear & Urban',
      subtitle: 'Camisetas heavyweight 240g, jaquetas bomber e cargos',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
      badge: 'Tendência 2026',
      categoryTarget: 'Streetwear',
      countText: 'Oversized & Techwear',
    },
    {
      id: 'destaques',
      title: 'Destaques da Semana',
      subtitle: 'As peças mais desejadas e consultadas no WhatsApp',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
      badge: 'Best Sellers',
      categoryTarget: 'Todos',
      countText: 'Curadoria em Alta',
    },
    {
      id: 'acessorios',
      title: 'Acessórios & Bolsas',
      subtitle: 'Design escultural dos anos 90 revisitado com requinte',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
      badge: 'Toque Final',
      categoryTarget: 'Acessórios',
      countText: 'Couro & Detalhes',
    },
  ];

  const handleSelectCollection = (cat: string) => {
    setFilterCategory(cat);
    const catalogElem = document.getElementById('catalogo');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="colecoes" className="py-24 bg-[#07080B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-[11px] font-sans font-semibold text-red-400 uppercase tracking-[0.25em] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Coleções &amp; Linhas Estruturadas
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
              Curadoria de Estilo para Cada Ocasião
            </h2>
            <p className="text-sm text-zinc-400 font-sans font-light">
              Explore cada universo da Espaço 10, com composições visuais exclusivas pensadas para o seu guarda-roupa.
            </p>
          </div>

          <a
            href="#catalogo"
            onClick={() => setFilterCategory('Todos')}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.15em] text-red-400 hover:text-red-300 transition-colors self-start md:self-end"
          >
            <span>Ver Todas as Peças</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Collections Grid - Editorial Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Feminino (Wide 7 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[0].categoryTarget)}
            className="lg:col-span-7 relative h-96 sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/[0.08]"
          >
            <img 
              src={collections[0].image} 
              alt={collections[0].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-[0.15em] uppercase bg-red-900/80 backdrop-blur-md text-white border border-red-700/50 shadow-lg">
                {collections[0].badge}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="space-y-1 text-left">
                <span className="text-[11px] text-red-300 font-mono tracking-wider">{collections[0].countText}</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {collections[0].title}
                </h3>
                <p className="text-xs text-zinc-300 font-sans font-light max-w-md hidden sm:block">
                  {collections[0].subtitle}
                </p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/[0.15] flex items-center justify-center text-white group-hover:bg-red-800 transition-all flex-shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Masculino (5 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[1].categoryTarget)}
            className="lg:col-span-5 relative h-96 sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/[0.08]"
          >
            <img 
              src={collections[1].image} 
              alt={collections[1].title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-[0.15em] uppercase bg-black/60 backdrop-blur-md text-zinc-200 border border-white/[0.1]">
                {collections[1].badge}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="space-y-1 text-left">
                <span className="text-[11px] text-zinc-400 font-mono tracking-wider">{collections[1].countText}</span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {collections[1].title}
                </h3>
                <p className="text-xs text-zinc-300 font-sans font-light hidden sm:block">
                  {collections[1].subtitle}
                </p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/[0.15] flex items-center justify-center text-white group-hover:bg-red-800 transition-all flex-shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Streetwear (4 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[2].categoryTarget)}
            className="lg:col-span-4 relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/[0.08]"
          >
            <img 
              src={collections[2].image} 
              alt={collections[2].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-black/60 text-zinc-300 border border-white/[0.1]">
                {collections[2].badge}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-xl font-serif font-bold text-white">{collections[2].title}</h3>
              <p className="text-xs text-zinc-300 font-sans font-light line-clamp-1">{collections[2].subtitle}</p>
            </div>
          </div>

          {/* Card 4: Destaques (4 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[3].categoryTarget)}
            className="lg:col-span-4 relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/[0.08]"
          >
            <img 
              src={collections[3].image} 
              alt={collections[3].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-red-950/60 text-red-200 border border-red-800/40">
                {collections[3].badge}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-xl font-serif font-bold text-white">{collections[3].title}</h3>
              <p className="text-xs text-zinc-300 font-sans font-light line-clamp-1">{collections[3].subtitle}</p>
            </div>
          </div>

          {/* Card 5: Acessórios (4 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[4].categoryTarget)}
            className="lg:col-span-4 relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/[0.08]"
          >
            <img 
              src={collections[4].image} 
              alt={collections[4].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-black/60 text-zinc-300 border border-white/[0.1]">
                {collections[4].badge}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-xl font-serif font-bold text-white">{collections[4].title}</h3>
              <p className="text-xs text-zinc-300 font-sans font-light line-clamp-1">{collections[4].subtitle}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
