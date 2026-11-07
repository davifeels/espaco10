import React from 'react';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../ui/InstagramIcon';

export const SocialProofSection: React.FC = () => {
  const editorialPosts = [
    {
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
      caption: 'Composição de alfaiataria contemporânea com toque minimalista.',
      likes: '342',
      comments: '28',
    },
    {
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80',
      caption: 'Streetwear essencial: novos cortes e tonalidades urbanas.',
      likes: '489',
      comments: '41',
    },
    {
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
      caption: 'Look fluido para o final de semana. Disponível para consulta no WhatsApp.',
      likes: '295',
      comments: '19',
    },
    {
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
      caption: 'Wide leg milão e detalhes que transformam qualquer ocasião.',
      likes: '512',
      comments: '63',
    },
  ];

  return (
    <section className="py-24 bg-[#07080B] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-red-300 text-[11px] font-sans font-semibold uppercase tracking-[0.2em]">
              <InstagramIcon className="w-3.5 h-3.5" />
              Presença Digital Consolidada
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
              Acompanhe a Espaço 10 no <span className="font-editorial italic font-light text-zinc-300">Instagram</span>
            </h2>
            <p className="text-sm text-zinc-400 font-sans font-light">
              Mais de 18,9 mil seguidores conectados diariamente aos lançamentos, provadores reais e composições exclusivas.
            </p>
          </div>

          <a
            href="https://www.instagram.com/espaco_10.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-950 via-zinc-900 to-black border border-white/[0.1] text-white text-xs font-sans font-semibold tracking-wider uppercase shadow-xl hover:border-red-600/50 transition-colors self-start md:self-end"
          >
            <InstagramIcon className="w-4 h-4 text-red-400" />
            <span>@espaco_10.pl</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Editorial Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialPosts.map((post, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#0D0F16] border border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
                <img
                  src={post.image}
                  alt="Referência Editorial de Moda"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 text-left space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-white">
                  <InstagramIcon className="w-3.5 h-3.5 text-red-400" />
                  <span>@espaco_10.pl</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans font-light line-clamp-2">
                  {post.caption}
                </p>
                <div className="pt-2 text-[10px] text-zinc-500 font-mono">
                  * Imagens ilustrativas para referência de estilo da proposta.
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
