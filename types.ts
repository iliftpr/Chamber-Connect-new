export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Networking' | 'Workshop' | 'Webinar' | 'Gala';
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  category: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  recommended?: boolean;
}
