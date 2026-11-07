import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Lead, LeadStatus, Conversation, Campaign, CommercialReport } from '../types';
import { 
  INITIAL_PRODUCTS, 
  INITIAL_LEADS, 
  INITIAL_CONVERSATIONS, 
  INITIAL_CAMPAIGNS, 
  INITIAL_REPORT 
} from '../data/mockData';

interface AppContextType {
  // Navigation & View State
  view: 'landing' | 'dashboard';
  setView: (v: 'landing' | 'dashboard') => void;
  dashboardTab: 'overview' | 'products' | 'leads' | 'chat' | 'recovery' | 'campaigns' | 'reports' | 'brand';
  setDashboardTab: (tab: 'overview' | 'products' | 'leads' | 'chat' | 'recovery' | 'campaigns' | 'reports' | 'brand') => void;

  // Products
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'consultationCount'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product | null) => void;

  // Leads & CRM
  leads: Lead[];
  updateLeadStatus: (leadId: string, status: LeadStatus) => void;
  addLeadFromInquiry: (product: Product, size: string, color: string, clientName?: string) => void;

  // Conversations & Chat
  conversations: Conversation[];
  activeConversationId: string;
  setActiveConversationId: (id: string) => void;
  sendMessage: (convId: string, text: string, sender?: 'agent' | 'client') => void;
  startOrOpenChatForLead: (leadId: string) => void;

  // Campaigns & Reports
  campaigns: Campaign[];
  addCampaign: (campaign: Omit<Campaign, 'id'>) => void;
  report: CommercialReport;

  // Catalog Filters
  filterCategory: string;
  setFilterCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Inquiry Cart
  inquiryList: Product[];
  addToInquiry: (product: Product) => void;
  removeFromInquiry: (id: string) => void;
  isInInquiry: (id: string) => boolean;

  // Brand Guide Modal
  isBrandGuideOpen: boolean;
  setIsBrandGuideOpen: (open: boolean) => void;

  // Action
  handleDirectWhatsAppInquiry: (product: Product, size?: string, color?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');
  const [dashboardTab, setDashboardTab] = useState<'overview' | 'products' | 'leads' | 'chat' | 'recovery' | 'campaigns' | 'reports' | 'brand'>('overview');

  // Products
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('espaco10_products');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Leads
  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem('espaco10_leads');
      return saved ? JSON.parse(saved) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  // Conversations
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    try {
      const saved = localStorage.getItem('espaco10_conversations');
      return saved ? JSON.parse(saved) : INITIAL_CONVERSATIONS;
    } catch {
      return INITIAL_CONVERSATIONS;
    }
  });

  const [activeConversationId, setActiveConversationId] = useState<string>('conv-1');

  // Campaigns
  const [campaigns, setCampaigns] = useState<Campaign[]>(() => {
    try {
      const saved = localStorage.getItem('espaco10_campaigns');
      return saved ? JSON.parse(saved) : INITIAL_CAMPAIGNS;
    } catch {
      return INITIAL_CAMPAIGNS;
    }
  });

  // Report
  const [report] = useState<CommercialReport>(INITIAL_REPORT);

  // Catalog Filters
  const [filterCategory, setFilterCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Inquiry List
  const [inquiryList, setInquiryList] = useState<Product[]>([]);

  // Brand Modal
  const [isBrandGuideOpen, setIsBrandGuideOpen] = useState<boolean>(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('espaco10_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('espaco10_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('espaco10_conversations', JSON.stringify(conversations));
  }, [conversations]);

  useEffect(() => {
    localStorage.setItem('espaco10_campaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  // Product Actions
  const addProduct = (newProdData: Omit<Product, 'id' | 'consultationCount'>) => {
    const newProd: Product = {
      ...newProdData,
      id: `prod-${Date.now()}`,
      consultationCount: 1,
    };
    setProducts(prev => [newProd, ...prev]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Lead Actions
  const updateLeadStatus = (leadId: string, status: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status } : l));
    // Also update conversation status if matching
    setConversations(prev => prev.map(c => c.leadId === leadId ? { ...c, status } : c));
  };

  const addLeadFromInquiry = (product: Product, size: string, color: string, clientName = 'Cliente Visitante') => {
    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name: clientName,
      phone: `(61) 9${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
      productName: product.name,
      productImage: product.images[0] || '',
      productId: product.id,
      size,
      color,
      channel: 'Catálogo Digital',
      date: 'Agora',
      status: 'Novo interessado',
      nextAction: 'Confirmar medidas e verificar envio',
      lastInteractionHoursAgo: 0,
      value: product.price,
    };

    setLeads(prev => [newLead, ...prev]);

    // Create a new simulated conversation
    const newConv: Conversation = {
      id: `conv-${Date.now()}`,
      leadId: newLead.id,
      clientName: newLead.name,
      clientPhone: newLead.phone,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      channel: 'Catálogo Digital',
      productName: product.name,
      productImage: product.images[0] || '',
      productSize: `${size} (${color})`,
      productPrice: product.price,
      status: 'Novo interessado',
      unreadCount: 1,
      updatedAt: 'Agora',
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: 'client',
          text: `Olá! Vim pelo Catálogo Espaço 10 Experience e quero saber a disponibilidade da peça "${product.name}" no tamanho ${size} e cor ${color}.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isRead: false,
        }
      ],
    };

    setConversations(prev => [newConv, ...prev]);

    // Update product consultation count
    updateProduct(product.id, { consultationCount: (product.consultationCount || 0) + 1 });
  };

  // Messaging
  const sendMessage = (convId: string, text: string, sender: 'agent' | 'client' = 'agent') => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender,
      text,
      timestamp: time,
      isRead: true,
    };

    setConversations(prev => prev.map(c => {
      if (c.id === convId) {
        return {
          ...c,
          updatedAt: time,
          unreadCount: sender === 'client' ? c.unreadCount + 1 : 0,
          messages: [...c.messages, newMsg],
        };
      }
      return c;
    }));

    // Auto-reply simulation if agent replied
    if (sender === 'agent') {
      setTimeout(() => {
        const autoReplies = [
          'Entendi perfeitamente! Gostei muito do detalhe. Vocês conseguem enviar para Brasília ainda esta semana?',
          'Maravilha! Vou conferir as medidas certinho com a fita e já te aviso.',
          'Excelente atendimento, obrigado pela atenção!',
          'Perfeito! Se puder me mandar a chave Pix, já reservo a peça agora mesmo.',
        ];
        const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
        const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setConversations(current => current.map(c => {
          if (c.id === convId) {
            return {
              ...c,
              updatedAt: replyTime,
              messages: [
                ...c.messages,
                {
                  id: `reply-${Date.now()}`,
                  sender: 'client',
                  text: randomReply,
                  timestamp: replyTime,
                  isRead: false,
                }
              ]
            };
          }
          return c;
        }));
      }, 2400);
    }
  };

  const startOrOpenChatForLead = (leadId: string) => {
    const existing = conversations.find(c => c.leadId === leadId);
    if (existing) {
      setActiveConversationId(existing.id);
      setView('dashboard');
      setDashboardTab('chat');
    } else {
      const lead = leads.find(l => l.id === leadId);
      if (lead) {
        const newConvId = `conv-${Date.now()}`;
        const newConv: Conversation = {
          id: newConvId,
          leadId: lead.id,
          clientName: lead.name,
          clientPhone: lead.phone,
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          channel: lead.channel,
          productName: lead.productName,
          productImage: lead.productImage,
          productSize: lead.size,
          productPrice: lead.value,
          status: lead.status,
          unreadCount: 0,
          updatedAt: 'Agora',
          messages: [
            {
              id: `msg-${Date.now()}`,
              sender: 'agent',
              text: `Olá ${lead.name.split(' ')[0]}! Tudo bem? Aqui é da equipe Espaço 10. Estou à sua disposição para te atender sobre a peça "${lead.productName}". Como posso te ajudar hoje?`,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              isRead: true,
            }
          ]
        };
        setConversations(prev => [newConv, ...prev]);
        setActiveConversationId(newConvId);
        setView('dashboard');
        setDashboardTab('chat');
      }
    }
  };

  const addCampaign = (campaign: Omit<Campaign, 'id'>) => {
    const newCamp: Campaign = {
      ...campaign,
      id: `camp-${Date.now()}`,
    };
    setCampaigns(prev => [newCamp, ...prev]);
  };

  // Inquiry List
  const addToInquiry = (product: Product) => {
    if (!inquiryList.some(p => p.id === product.id)) {
      setInquiryList(prev => [...prev, product]);
    }
  };

  const removeFromInquiry = (id: string) => {
    setInquiryList(prev => prev.filter(p => p.id !== id));
  };

  const isInInquiry = (id: string) => inquiryList.some(p => p.id === id);

  // Direct WhatsApp Inquiry simulation
  const handleDirectWhatsAppInquiry = (product: Product, size = 'M', color = '') => {
    addLeadFromInquiry(product, size, color || (product.colors[0]?.name || 'Padrão'));
    const message = encodeURIComponent(
      `Olá Espaço 10! Gostaria de consultar a disponibilidade do "${product.name}" (Tamanho: ${size}${color ? `, Cor: ${color}` : ''}). Vi no catálogo digital!`
    );
    // WhatsApp direct link with demonstrative phone number
    window.open(`https://api.whatsapp.com/send?phone=5561999999999&text=${message}`, '_blank');
  };

  return (
    <AppContext.Provider
      value={{
        view,
        setView,
        dashboardTab,
        setDashboardTab,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        selectedProduct,
        setSelectedProduct,
        leads,
        updateLeadStatus,
        addLeadFromInquiry,
        conversations,
        activeConversationId,
        setActiveConversationId,
        sendMessage,
        startOrOpenChatForLead,
        campaigns,
        addCampaign,
        report,
        filterCategory,
        setFilterCategory,
        searchQuery,
        setSearchQuery,
        inquiryList,
        addToInquiry,
        removeFromInquiry,
        isInInquiry,
        isBrandGuideOpen,
        setIsBrandGuideOpen,
        handleDirectWhatsAppInquiry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
