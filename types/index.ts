export interface Activity {
  id: string;
  name: string;
  description: string;
  short_description: string;
  base_price_local: number;
  base_price_international: number;
  image_url: string;
  is_active: boolean;
  created_at: string;
}

export interface SeasonalPricing {
  id: string;
  activity_id: string;
  season_name: string;
  start_date: string;
  end_date: string;
  price_local: number;
  price_international: number;
}

export interface Booking {
  id: string;
  activity_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  nationality: string;
  booking_date: string;
  number_of_people: number;
  is_local: boolean;
  total_price: number;
  deposit_paid: number;
  special_requests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  payment_status: 'pending' | 'deposit_paid' | 'fully_paid';
  admin_response?: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  customer_country: string;
  rating: number;
  comment: string;
  is_approved: boolean;
  is_featured: boolean;
  created_at: string;
}

export interface GalleryImage {
  id: string;
  image_url: string;
  category: string;
  caption?: string;
  created_at: string;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  image_url: string;
  is_active: boolean;
  created_at: string;
}

export interface SlideshowImage {
  id: string;
  image_url: string;
  title: string;
  subtitle: string;
  order_index: number;
  is_active: boolean;
}

export interface ContactInfo {
  id: string;
  phone: string;
  email: string;
  whatsapp: string;
  instagram: string;
  twitter: string;
  tiktok: string;
  address: string;
  map_embed: string;
}

export interface Newsletter {
  id: string;
  email: string;
  subscribed_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}
