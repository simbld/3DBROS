import { Product, User, OrderItem as PrismaOrderItem } from "@prisma/client";

// Define or import the Pagination type
export interface Pagination {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

/**
 * Answer for paginated product list.
 */
export interface ProductListResponse {
  products: Product[]; // Using the Prisma type
  pagination: Pagination;
}

/**
 * Response after user authentication.
 */
export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User; // Using the Prisma type
  message?: string;
}

/**
 * Order creation request.
 */
export interface OrderItem extends PrismaOrderItem {
  totalPrice: number;
}
