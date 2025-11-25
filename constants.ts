import { Business, Event, MembershipTier, NewsItem } from './types';

export const BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Queens Tech Solutions',
    category: 'Technology',
    description: 'Providing top-tier IT support and software development for local enterprises.',
    address: '123 Tech Blvd, Queens, NY',
    phone: '(718) 555-0101',
    website: 'www.queenstech.com',
    imageUrl: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '2',
    name: 'Bayside Bakery & Cafe',
    category: 'Food & Beverage',
    description: 'Artisanal breads, pastries, and locally roasted coffee.',
    address: '45 Bell Blvd, Bayside, NY',
    phone: '(718) 555-0102',
    website: 'www.baysidebakery.com',
    imageUrl: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: '3',
    name: 'Metropolis Legal Group',
    category: 'Legal Services',
    description: 'Comprehensive legal representation for small businesses and startups.',
    address: '88 Justice Ave, Queens, NY',
    phone: '(718) 555-0103',
    website: 'www.metropolislegal.com',
    imageUrl: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: '4',
    name: 'Greenpoint Construction',
    category: 'Construction',
    description: 'Sustainable building practices for commercial and residential projects.',
    address: '22 Industrial Way, Queens, NY',
    phone: '(718) 555-0104',
    website: 'www.greenpointbuilds.com',
    imageUrl: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: '5',
    name: 'Astoria Marketing Hub',
    category: 'Marketing',
    description: 'Digital marketing strategies to help your local business grow.',
    address: '100 Broadway, Astoria, NY',
    phone: '(718) 555-0105',
    website: 'www.astoriamarketing.com',
    imageUrl: 'https://picsum.photos/400/300?random=5',
  },
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Small Business Networking Mixer',
    date: '2023-11-15T18:00:00',
    location: 'The Grand Ballroom, Flushing',
    description: 'Connect with fellow business owners and expand your professional network.',
    category: 'Networking',
    imageUrl: 'https://picsum.photos/600/400?random=10',
  },
  {
    id: '2',
    title: 'Digital Marketing Workshop 101',
    date: '2023-11-20T10:00:00',
    location: 'Chamber HQ, Conference Room A',
    description: 'Learn the basics of SEO, Social Media, and Email Marketing.',
    category: 'Workshop',
    imageUrl: 'https://picsum.photos/600/400?random=11',
  },
  {
    id: '3',
    title: 'Annual Business Awards Gala',
    date: '2023-12-05T19:00:00',
    location: 'Terrace on the Park',
    description: 'Celebrating the achievements of our local business community.',
    category: 'Gala',
    imageUrl: 'https://picsum.photos/600/400?random=12',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Chamber Advocates for Tax Relief',
    date: 'Oct 28, 2023',
    summary: 'The Chamber leadership met with city officials to discuss tax incentives for small businesses.',
    imageUrl: 'https://picsum.photos/600/400?random=20',
    category: 'Advocacy',
  },
  {
    id: '2',
    title: 'New Grant Program Announced',
    date: 'Oct 25, 2023',
    summary: 'A new $5M grant program is now available for minority-owned businesses in the borough.',
    imageUrl: 'https://picsum.photos/600/400?random=21',
    category: 'Resources',
  },
  {
    id: '3',
    title: 'Welcome 50 New Members!',
    date: 'Oct 20, 2023',
    summary: 'We are thrilled to welcome a diverse group of new businesses to our growing family.',
    imageUrl: 'https://picsum.photos/600/400?random=22',
    category: 'Community',
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'small-biz',
    name: 'Small Business',
    price: '$250/yr',
    benefits: [
      'Directory Listing',
      'Access to Networking Events',
      'Monthly Newsletter',
      'Member-to-Member Discounts'
    ],
  },
  {
    id: 'corporate',
    name: 'Corporate',
    price: '$750/yr',
    recommended: true,
    benefits: [
      'Enhanced Directory Listing',
      '2 Tickets to Annual Gala',
      'Sponsorship Opportunities',
      'Access to Government Affairs Committee',
      'All Small Business Benefits'
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$2,500/yr',
    benefits: [
      'Premium Directory Placement',
      'Table at Annual Gala',
      'Dedicated Account Manager',
      'Logo on Homepage',
      'Exclusive Executive Roundtables',
      'All Corporate Benefits'
    ],
  },
];
