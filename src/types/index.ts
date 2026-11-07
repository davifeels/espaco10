export type CategoryType = 'Todos' | 'Feminino' | 'Masculino' | 'Streetwear' | 'Alfaiataria' | 'Acessórios';

export interface Product {
  id: string;
  name: string;
  category: 'Feminino' | 'Masculino' | 'Streetwear' | 'Alfaiataria' | 'Acessórios';
  gender: 'Feminino' | 'Masculino' | 'Unissex';
  price: number;
  originalPrice?: number;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  fabric: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  stockCount: number;
  consultationCount: number;
}

export type LeadStatus = 
  | 'Novo interessado'
  | 'Em atendimento'
  | 'Aguardando resposta'
  | 'Interesse confirmado'
  | 'Compra concluída'
  | 'Sem interesse';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  productName: string;
  productImage: string;
  productId: string;
  size: string;
  color?: string;
  channel: 'Instagram @espaco_10.pl' | 'Catálogo Digital' | 'WhatsApp Direto' | 'Indicação';
  date: string;
  status: LeadStatus;
  nextAction: string;
  lastInteractionHoursAgo: number;
  value: number;
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'client' | 'agent';
  text: string;
  timestamp: string;
  isRead?: boolean;
}

export interface Conversation {
  id: string;
  leadId: string;
  clientName: string;
  clientPhone: string;
  avatar: string;
  channel: string;
  productName: string;
  productImage: string;
  productSize: string;
  productPrice: number;
  status: LeadStatus;
  unreadCount: number;
  messages: ChatMessage[];
  updatedAt: string;
}

export interface Campaign {
  id: string;
  name: string;
  targetSegment: string;
  channel: string;
  scheduledDate: string;
  status: 'Ativa' | 'Agendada' | 'Concluída' | 'Rascunho';
  recipientsCount: number;
  openRate: string;
  clickRate: string;
  leadsGenerated: number;
  description: string;
}

export interface CommercialReport {
  period: string;
  totalContacts: number;
  activeChats: number;
  conversionRate: number;
  averageTicket: number;
  topProducts: { name: string; category: string; count: number; percentage: number }[];
  channelDistribution: { channel: string; count: number; percentage: number }[];
  salesByDay: { day: string; contacts: number; simulatedSales: number }[];
}
