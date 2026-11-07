import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Layers, 
  Sparkles, 
  Eye, 
  Check, 
  X,
  Image as ImageIcon
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { Product } from '../../../types';

export const ProductsTab: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, setSelectedProduct } = useApp();

  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Todos');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form states for new product
  const [newName, setNewName] = useState('');
  const [newCat, setNewCat] = useState<'Feminino' | 'Masculino' | 'Streetwear' | 'Alfaiataria' | 'Acessórios'>('Feminino');
  const [newGender, setNewGender] = useState<'Feminino' | 'Masculino' | 'Unissex'>('Feminino');
  const [newPrice, setNewPrice] = useState('249.90');
  const [newDesc, setNewDesc] = useState('');
  const [newFabric, setNewFabric] = useState('Algodão Nobre com Elastano');
  const [newSizes, setNewSizes] = useState('P, M, G, GG');
  const [newImage, setNewImage] = useState('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80');
  const [newStock, setNewStock] = useState('12');

  const filteredProducts = products.filter(p => {
    if (selectedCat !== 'Todos' && p.category !== selectedCat) return false;
    if (search.trim() !== '') {
      const q = search.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }
    return true;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const sizeArray = newSizes.split(',').map(s => s.trim()).filter(Boolean);
    const parsedPrice = parseFloat(newPrice.replace(',', '.')) || 199.90;
    const parsedStock = parseInt(newStock, 10) || 10;

    addProduct({
      name: newName,
      category: newCat,
      gender: newGender,
      price: parsedPrice,
      description: newDesc || 'Peça demonstrativa com acabamento e corte premium.',
      sizes: sizeArray.length > 0 ? sizeArray : ['P', 'M', 'G'],
      colors: [
        { name: 'Preto', hex: '#111215' },
        { name: 'Off-White', hex: '#F3F4F6' },
      ],
      images: [newImage],
      fabric: newFabric,
      inStock: parsedStock > 0,
      stockCount: parsedStock,
      isNew: true,
    });

    setIsCreateModalOpen(false);
    // Reset fields
    setNewName('');
    setNewDesc('');
  };

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    updateProduct(editingProduct.id, {
      price: editingProduct.price,
      stockCount: editingProduct.stockCount,
      inStock: editingProduct.stockCount > 0,
      name: editingProduct.name,
      description: editingProduct.description,
    });
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn text-left">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-heading">
            Gestão do Catálogo de Produtos
          </h2>
          <p className="text-xs text-gray-400">
            {products.length} peças cadastradas na demonstração da loja
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-950/40 transition-colors self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Produto Fictício</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-[#11131B] border border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar produto pelo nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {['Todos', 'Feminino', 'Masculino', 'Streetwear', 'Alfaiataria', 'Acessórios'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCat === cat
                  ? 'bg-rose-600 text-white'
                  : 'bg-zinc-900 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Table */}
      <div className="rounded-2xl bg-[#11131B] border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#151824] border-b border-white/10 text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Peça</th>
                <th className="py-3.5 px-4">Categoria</th>
                <th className="py-3.5 px-4">Preço Ilustrativo</th>
                <th className="py-3.5 px-4">Estoque</th>
                <th className="py-3.5 px-4">Tamanhos</th>
                <th className="py-3.5 px-4 text-center">Consultas</th>
                <th className="py-3.5 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                  
                  {/* Name & Photo */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={p.images[0]} 
                        alt={p.name} 
                        className="w-10 h-12 rounded-lg object-cover bg-zinc-800 cursor-pointer"
                        onClick={() => setSelectedProduct(p)}
                      />
                      <div>
                        <div 
                          className="font-bold text-white hover:text-rose-400 cursor-pointer line-clamp-1"
                          onClick={() => setSelectedProduct(p)}
                        >
                          {p.name}
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">ID: {p.id}</span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[11px] bg-zinc-900 border border-zinc-700 text-gray-300">
                      {p.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-3 px-4 font-mono font-bold text-white">
                    R$ {p.price.toFixed(2).replace('.', ',')}
                  </td>

                  {/* Stock */}
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold font-mono ${
                      p.stockCount > 0 
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                    }`}>
                      {p.stockCount > 0 ? `${p.stockCount} un.` : 'Esgotado'}
                    </span>
                  </td>

                  {/* Sizes */}
                  <td className="py-3 px-4">
                    <div className="flex gap-1 flex-wrap">
                      {p.sizes.map(s => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] font-mono text-gray-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Consultation count */}
                  <td className="py-3 px-4 text-center font-mono font-bold text-rose-400">
                    {p.consultationCount || 10}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                        title="Ver no Catálogo"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setEditingProduct(p)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-600/30 text-gray-300 hover:text-rose-300 transition-colors"
                        title="Editar"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-red-600/30 text-gray-400 hover:text-red-400 transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: CREATE FICTITIOUS PRODUCT */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div 
            className="w-full max-w-lg bg-[#0E1017] border border-white/15 rounded-2xl shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white font-heading">
                Cadastrar Novo Produto Fictício
              </h3>
              <button onClick={() => setIsCreateModalOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Nome da Peça</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Colete Alfaiataria Milão Estruturado"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Categoria</label>
                  <select
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Streetwear">Streetwear</option>
                    <option value="Alfaiataria">Alfaiataria</option>
                    <option value="Acessórios">Acessórios</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Público</label>
                  <select
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Unissex">Unissex</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Preço Ilustrativo (R$)</label>
                  <input
                    type="text"
                    required
                    placeholder="249.90"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Qtd. Estoque</label>
                  <input
                    type="number"
                    min="0"
                    value={newStock}
                    onChange={(e) => setNewStock(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Tamanhos (separados por vírgula)</label>
                <input
                  type="text"
                  value={newSizes}
                  onChange={(e) => setNewSizes(e.target.value)}
                  placeholder="PP, P, M, G, GG"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Tecido / Composição</label>
                <input
                  type="text"
                  value={newFabric}
                  onChange={(e) => setNewFabric(e.target.value)}
                  placeholder="Ex: 100% Algodão Nobre Penteado"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">URL da Imagem (Unsplash ou Web)</label>
                <input
                  type="url"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500 font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Descrição</label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Descrição da modelagem e caimento..."
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-gray-300 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold"
                >
                  Salvar Produto Fictício
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT PRODUCT */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div 
            className="w-full max-w-md bg-[#0E1017] border border-white/15 rounded-2xl shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white font-heading">
                Editar Produto Demonstrativo
              </h3>
              <button onClick={() => setEditingProduct(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleEditSave} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Nome</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Preço (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Estoque</label>
                  <input
                    type="number"
                    min="0"
                    value={editingProduct.stockCount}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stockCount: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-gray-300 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
