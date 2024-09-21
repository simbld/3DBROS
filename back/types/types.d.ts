// TypeScript declarations file (types.d.ts)

/**
 * Représente un utilisateur dans le système.
 */
interface User {
  id: number;
  email: string;
  name?: string;
  password?: string; // optionnel si le mot de passe est géré ailleurs
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Représente un produit individuel dans le panier d'un utilisateur.
 */
interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

/**
 * Représente une commande passée par un utilisateur.
 */
interface Order {
  id: number;
  customerId: number; // Référence à l'utilisateur
  customerName: string; // Nom de l'utilisateur
  address: string; // Adresse de livraison
  price: number; // Total de la commande
  products: CartItem[]; // Liste des produits dans la commande
  status: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED"; // Statut de la commande
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Types pour les entrées Prisma (Order et User)
 */
type OrderCreateInput = {
  customerId: number;
  customerName: string;
  address: string;
  price: number;
  products: CartItem[]; // Les articles du panier
  status?: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED"; // Valeur par défaut à définir lors de la création
};

type OrderUpdateInput = {
  address?: string;
  price?: number;
  products?: CartItem[];
  status?: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
};

type UserCreateInput = {
  email: string;
  name?: string;
  password: string;
};

type UserUpdateInput = {
  email?: string;
  name?: string;
  password?: string;
};

/**
 * Session de l'utilisateur après connexion (authentification).
 */
interface UserSession {
  userId: number;
  email: string;
  token: string; // Jeton JWT ou autre type de jeton pour l'authentification
}

/**
 * Pagination pour les résultats
 */
interface Pagination {
  page: number;
  limit: number;
  total: number;
}

/**
 * Requête de recherche de produit.
 */
interface ProductSearchRequest {
  searchTerm?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "price" | "name" | "rating";
}

/**
 * Réponse pour la liste de produits paginée.
 */
interface ProductListResponse {
  products: Product[];
  pagination: Pagination;
}

/**
 * Représente un produit dans le catalogue.
 */
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Champs de réponse après une action liée à la commande.
 */
interface OrderResponse {
  success: boolean;
  message: string;
  order?: Order;
}

/**
 * Statut des paiements
 */
interface PaymentStatus {
  status: "SUCCESS" | "FAILED" | "PENDING";
  orderId: number;
  paymentMethod: "CREDIT_CARD" | "PAYPAL" | "BANK_TRANSFER";
  transactionId: string;
  amount: number;
  timestamp: Date;
}

/**
 * Réponse après authentification de l'utilisateur.
 */
interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
}

/**
 * Interface pour la gestion des erreurs globales.
 */
interface ErrorResponse {
  error: boolean;
  message: string;
}
