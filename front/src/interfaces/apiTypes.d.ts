export interface CartItem {
  productId: number;
  name: string;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Order {
  id: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  status: string;
}

/**
 * Interface pour la structure des réponses API avec pagination.
 * @template T - Type des données contenues dans la réponse.
 */
export interface ApiResponse<T> {
  data: T;
  total?: number;
  error?: string;
}
