export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
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
