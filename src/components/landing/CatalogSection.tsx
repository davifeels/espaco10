import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  X, 
  SlidersHorizontal,
  Layers,
  ShoppingBag
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CatalogSection: React.FC = () => {
  const { 
    products, 
    setSelectedProduct, 
    handleDirectWhatsAppInquiry, 
    filterCategory, 
    setFilterCategory,
    searchQuery,
    setSearchQuery,
    addToInquiry,
    isInInquiry
  } = useApp();

  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('Todos');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('Todos');
  const [onlyNew, setOnlyNew] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'popular'>('featured');

  const categories = ['Todos', 'Feminino', 'Masculino', 'Streetwear', 'Alfaiataria', 'Acessórios'];
  const sizeOptions = ['Todos', 'PP', 'P', 'M', 'G', 'GG', '38', '40', '42', '44'];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category match
      if (filterCategory !== 'Todos' && prod.category !== filterCategory) {
        return false;
      }
      // Search query match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesDesc = prod.description.toLowerCase().includes(q);
        const matchesCat = prod.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }
      // Size filter match
      if (selectedSizeFilter !== 'Todos' && !prod.sizes.includes(selectedSizeFilter)) {
        return false;
      }
      // Price range match
      if (selectedPriceRange === 'under-200' && prod.price > 200) return false;
      if (selectedPriceRange === '200-300' && (prod.price < 200 || prod.price > 300)) return false;
      if (selectedPriceRange === 'above-300' && prod.price <= 300) return false;
      // Only new
      if (onlyNew && !prod.isNew) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'popular') return (b.consultationCount || 0) - (a.consultationCount || 0);
      return 0; // default order
    });
  }, [products, filterCategory, searchQuery, selectedSizeFilter, selectedPriceRange, onlyNew, sortBy]);

  const clearFilters = () => {
    setFilterCategory('Todos');
    setSearchQuery('');
    setSelectedSizeFilter('Todos');
    setSelectedPriceRange('Todos');
    setOnlyNew(false);
  };

  const hasActiveFilters = filterCategory !== 'Todos' || searchQuery !== '' || selectedSizeFilter !== 'Todos' || selectedPriceRange !== 'Todos' || onlyNew;

  return (
    <section id="catalogo" className="py-24 bg-[#08090C] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-[11px] font-sans font-semibold uppercase tracking-[0.2em]">
            <Layers className="w-3.5 h-3.5 text-red-500" />
            Catálogo Interativo de Alta Moda
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
            Vitrine Digital Espaço 10
          </h2>
          <p className="text-sm text-zinc-400 font-sans font-light">
            Selecione uma peça, confira medidas em centímetros e inicie atendimento direto com os consultores no WhatsApp.
          </p>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-zinc-400 text-[11px] inline-block font-mono">
            * Demonstração comercial conceitual: peças, estoques e valores são ilustrativos.
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#0D0F16] border border-white/[0.08] rounded-2xl p-5 mb-10 shadow-2xl space-y-4">
          
          {/* Top Row: Search & Sorting */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar por blazer, vestido midi, camisa linho, alfaiataria..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Toggle */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-zinc-400 whitespace-nowrap font-sans">
                <SlidersHorizontal className="w-3.5 h-3.5 text-red-500" />
                <span className="hidden sm:inline">Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/[0.08] text-xs text-white focus:outline-none focus:border-red-600 cursor-pointer font-sans"
              >
                <option value="featured">Destaques</option>
                <option value="popular">Mais Consultados</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>

              <button
                onClick={() => setOnlyNew(!onlyNew)}
                className={`px-3.5 py-2 rounded-xl text-xs font-sans font-medium border transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  onlyNew 
                    ? 'bg-red-800 border-red-700 text-white' 
                    : 'bg-black/40 border-white/[0.08] text-zinc-300 hover:border-zinc-600'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                <span>Novidades</span>
              </button>
            </div>
          </div>

          {/* Category Chips (Forbes Haute Couture Style) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all border ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-red-800 to-red-950 border-red-700/60 text-white shadow-xl shadow-red-950/40'
                    : 'bg-black/30 border-white/[0.06] text-zinc-400 hover:border-white/[0.15] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sizes Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/[0.06] text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-zinc-400 font-sans">Tamanho:</span>
              {sizeOptions.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSizeFilter(sz)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                    selectedSizeFilter === sz
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-red-400 hover:text-red-300 underline font-medium cursor-pointer"
              >
                Limpar todos os filtros ({filteredProducts.length} itens encontrados)
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0E1017] rounded-3xl border border-white/[0.06] space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Nenhum produto encontrado com os filtros atuais</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto font-sans font-light">
              Tente buscar por termos mais genéricos ou desmarque os filtros de tamanho e categoria.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-red-800 text-white text-xs font-semibold hover:bg-red-700 transition-colors"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#0D0F16] border border-white/[0.08] hover:border-red-800/40 overflow-hidden flex flex-col justify-between transition-all duration-400 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-red-950/20"
              >
                {/* Image Container with Badges */}
                <div 
                  className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={`Foto da peça ${product.name}`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {product.isNew && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase tracking-[0.15em] bg-red-900/90 text-white shadow-lg border border-red-700/50">
                        Novidade
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase tracking-[0.15em] bg-white/90 text-black shadow-lg">
                        Best Seller
                      </span>
                    )}
                  </div>

                  {/* Demonstrative Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[8.5px] font-mono uppercase bg-black/70 backdrop-blur-md text-zinc-300 border border-white/[0.08]">
                      Demonstrativo
                    </span>
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/[0.15] text-white text-xs font-sans font-medium flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5 text-red-400" />
                      Visualizar Detalhes
                    </span>
                  </div>
                </div>

                {/* Card Info & Details */}
                <div className="p-4 flex-1 flex flex-col justify-between text-left space-y-3">
                  
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1 font-sans">
                      <span>{product.category} • {product.gender}</span>
                      <span className="font-mono text-emerald-400 text-[10px]">Em estoque ({product.stockCount})</span>
                    </div>

                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="text-sm font-serif font-bold text-white hover:text-red-400 transition-colors line-clamp-1 cursor-pointer leading-tight"
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* Sizes preview */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map((s) => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-black/40 border border-white/[0.06] text-[10px] font-mono text-zinc-300">
                          {s}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="text-[10px] text-zinc-500 self-center">+{product.sizes.length - 4}</span>
                      )}
                    </div>

                    <div className="flex items-center -space-x-1">
                      {product.colors.map((c) => (
                        <div
                          key={c.name}
                          className="w-3 h-3 rounded-full border border-zinc-700 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline justify-between pt-2 border-t border-white/[0.06]">
                    <div>
                      <div className="text-base font-serif font-bold text-white tracking-tight">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </div>
                      {product.originalPrice && (
                        <span className="text-[10px] line-through text-zinc-500 font-mono">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-red-400 font-serif italic">
                      Consulta direta
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-4 gap-2 pt-1">
                    <button
                      onClick={() => handleDirectWhatsAppInquiry(product)}
                      className="col-span-3 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-sans font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition-colors"
                      title="Consultar pelo WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      onClick={() => addToInquiry(product)}
                      className={`col-span-1 rounded-xl border flex items-center justify-center transition-colors ${
                        isInInquiry(product.id)
                          ? 'bg-red-950/50 border-red-800 text-red-300'
                          : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300'
                      }`}
                      title={isInInquiry(product.id) ? 'Item salvo na lista' : 'Salvar na lista'}
                      aria-label="Salvar na lista"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
