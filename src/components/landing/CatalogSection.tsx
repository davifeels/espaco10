import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  X, 
  Check, 
  SlidersHorizontal,
  Layers,
  ShoppingBag
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Product } from '../../types';

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
  const priceOptions = [
    { label: 'Todos os preços', value: 'Todos' },
    { label: 'Até R$ 200', value: 'under-200' },
    { label: 'R$ 200 a R$ 300', value: '200-300' },
    { label: 'Acima de R$ 300', value: 'above-300' },
  ];

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
    <section id="catalogo" className="py-24 bg-[#08090C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-rose-400" />
            Catálogo Interativo Demonstrativo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Vitrine Digital Espaço 10
          </h2>
          <p className="text-sm text-gray-400">
            Navegue pelas peças, filtre por tamanho ou categoria e inicie uma conversa no WhatsApp com a peça e os tamanhos já preenchidos.
          </p>
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] inline-block font-mono">
            * Ambiente de demonstração conceitual: produtos, preços e disponibilidades são ilustrativos.
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#12151F] border border-white/10 rounded-2xl p-5 mb-10 shadow-xl space-y-4">
          
          {/* Top Row: Search & Sorting */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nome de peça, blazer, vestido, camiseta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Toggle */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-400 whitespace-nowrap">
                <SlidersHorizontal className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden sm:inline">Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-rose-500 cursor-pointer"
              >
                <option value="featured">Destaques</option>
                <option value="popular">Mais Consultados</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>

              <button
                onClick={() => setOnlyNew(!onlyNew)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  onlyNew 
                    ? 'bg-rose-600 border-rose-500 text-white' 
                    : 'bg-zinc-900 border-zinc-700 text-gray-300 hover:border-gray-500'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Novidades</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  filterCategory === cat
                    ? 'bg-rose-600 border-rose-500 text-white shadow-md shadow-rose-950/50'
                    : 'bg-zinc-900/60 border-zinc-800 text-gray-300 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Row: Sizes & Price Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-zinc-800 text-xs">
            {/* Sizes */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-400 font-medium">Tamanho:</span>
              {sizeOptions.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSizeFilter(sz)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                    selectedSizeFilter === sz
                      ? 'bg-white text-black font-bold'
                      : 'bg-zinc-900 text-gray-400 hover:text-white'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* Clear All Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-rose-400 hover:text-rose-300 underline font-medium cursor-pointer"
              >
                Limpar todos os filtros ({filteredProducts.length} itens encontrados)
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#10121A] rounded-3xl border border-white/5 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">Nenhum produto encontrado com os filtros atuais</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Tente buscar por termos mais genéricos ou desmarque os filtros de tamanho e categoria.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-semibold hover:bg-rose-500 transition-colors"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#11131B] border border-white/10 hover:border-rose-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-rose-950/20"
              >
                {/* Image Container with Badges */}
                <div 
                  className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {product.isNew && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-600 text-white shadow-lg">
                        Novidade
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-black shadow-lg">
                        Best Seller
                      </span>
                    )}
                  </div>

                  {/* Demonstrative Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-black/60 backdrop-blur-md text-gray-300 border border-white/10">
                      Demonstrativo
                    </span>
                  </div>

                  {/* Hover Quick Action Eye Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5 text-rose-400" />
                      Visualizar Detalhes
                    </span>
                  </div>
                </div>

                {/* Card Info & Details */}
                <div className="p-4 flex-1 flex flex-col justify-between text-left space-y-3">
                  
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                      <span>{product.category} • {product.gender}</span>
                      <span className="font-mono text-emerald-400">Em estoque ({product.stockCount})</span>
                    </div>

                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="text-sm font-bold text-white font-heading hover:text-rose-400 transition-colors line-clamp-1 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* Sizes & Colors preview */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map((s) => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-gray-300">
                          {s}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="text-[10px] text-gray-500 self-center">+{product.sizes.length - 4}</span>
                      )}
                    </div>

                    <div className="flex items-center -space-x-1">
                      {product.colors.map((c) => (
                        <div
                          key={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-zinc-700 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline justify-between pt-2 border-t border-zinc-800/80">
                    <div>
                      <div className="text-base font-extrabold text-white font-mono">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </div>
                      {product.originalPrice && (
                        <span className="text-[10px] line-through text-gray-500 font-mono">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-rose-400 font-medium">
                      Consulta direta
                    </span>
                  </div>

                  {/* Primary Consultation WhatsApp Button */}
                  <div className="grid grid-cols-4 gap-2 pt-1">
                    <button
                      onClick={() => handleDirectWhatsAppInquiry(product)}
                      className="col-span-3 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition-colors"
                      title="Consultar pelo WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      onClick={() => addToInquiry(product)}
                      className={`col-span-1 rounded-xl border flex items-center justify-center transition-colors ${
                        isInInquiry(product.id)
                          ? 'bg-rose-600/30 border-rose-500/50 text-rose-300'
                          : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-gray-300'
                      }`}
                      title={isInInquiry(product.id) ? 'Item salvo na lista' : 'Salvar na lista'}
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
