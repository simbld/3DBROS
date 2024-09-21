import { Prisma } from "@prisma/client";

/**
 * Définition des types supplémentaires pour l'entité `Order`
 */
// Assuming the correct type is `OrderModel` or you need to define it manually
export type Order = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  customerName: string;
  address: string;
  price: number;
  products: CartItem[];
  status: string;
};

// Définition des éléments du panier
export type CartItem = {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
};

// Exemple de types Prisma supplémentaires
export type OrderCreateInput = Prisma.OrderCreateInput;
export type OrderUpdateInput = Prisma.OrderUpdateInput;
