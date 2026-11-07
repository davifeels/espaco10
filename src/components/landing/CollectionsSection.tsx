import React from 'react';
import { ArrowRight, Sparkles, Flame, Star, Tag } from 'lucide-react';
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
    <section id="colecoes" className="py-24 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Coleções &amp; Linhas Estruturadas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Curadoria de Estilo para Cada Momento
            </h2>
            <p className="text-sm text-gray-400">
              Explore cada universo da Espaço 10, com composições visuais exclusivas pensadas para o seu guarda-roupa.
            </p>
          </div>

          <a
            href="#catalogo"
            onClick={() => setFilterCategory('Todos')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 hover:text-rose-300 transition-colors self-start md:self-end"
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
            className="lg:col-span-7 relative h-96 sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
          >
            <img 
              src={collections[0].image} 
              alt={collections[0].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-rose-600 text-white shadow-lg">
                {collections[0].badge}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="space-y-1 text-left">
                <span className="text-xs text-rose-300 font-mono tracking-wider">{collections[0].countText}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {collections[0].title}
                </h3>
                <p className="text-xs text-gray-300 max-w-md hidden sm:block">
                  {collections[0].subtitle}
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-rose-600 transition-all flex-shrink-0">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Masculino (5 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[1].categoryTarget)}
            className="lg:col-span-5 relative h-96 sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
          >
            <img 
              src={collections[1].image} 
              alt={collections[1].title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-zinc-800 text-gray-200 border border-zinc-700">
                {collections[1].badge}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="space-y-1 text-left">
                <span className="text-xs text-zinc-400 font-mono tracking-wider">{collections[1].countText}</span>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  {collections[1].title}
                </h3>
                <p className="text-xs text-gray-300 hidden sm:block">
                  {collections[1].subtitle}
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-rose-600 transition-all flex-shrink-0">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Streetwear (4 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[2].categoryTarget)}
            className="lg:col-span-4 relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
          >
            <img 
              src={collections[2].image} 
              alt={collections[2].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {collections[2].badge}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-xl font-bold text-white font-heading">{collections[2].title}</h3>
              <p className="text-xs text-gray-300 line-clamp-1">{collections[2].subtitle}</p>
            </div>
          </div>

          {/* Card 4: Destaques (4 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[3].categoryTarget)}
            className="lg:col-span-4 relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
          >
            <img 
              src={collections[3].image} 
              alt={collections[3].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-rose-600/30 text-rose-300 border border-rose-500/40">
                {collections[3].badge}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-xl font-bold text-white font-heading">{collections[3].title}</h3>
              <p className="text-xs text-gray-300 line-clamp-1">{collections[3].subtitle}</p>
            </div>
          </div>

          {/* Card 5: Acessórios (4 cols) */}
          <div 
            onClick={() => handleSelectCollection(collections[4].categoryTarget)}
            className="lg:col-span-4 relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
          >
            <img 
              src={collections[4].image} 
              alt={collections[4].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {collections[4].badge}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-xl font-bold text-white font-heading">{collections[4].title}</h3>
              <p className="text-xs text-gray-300 line-clamp-1">{collections[4].subtitle}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
