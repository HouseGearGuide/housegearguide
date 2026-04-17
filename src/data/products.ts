export type Category = 'smart-home' | 'backup-power';

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  tagline: string;
  affiliateUrl: string;
  price: number;
  rating: number;
}

// Add products here — each one becomes a programmatic page
export const products: Product[] = [];
