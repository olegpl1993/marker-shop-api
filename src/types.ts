interface Size {
  amount: number;
  size: number;
}

export interface Product {
  sku: string;
  name: string;
  price: number;
  category: string;
  vendor: string;
  model: string;
  description: string;
  gallery: string[];
  color: string;
  weight: string;
  country: string;
  sizes: Size[];
}
