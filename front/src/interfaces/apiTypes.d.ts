/**
 * Interface pour la structure des réponses API avec pagination.
 * @template T - Type des données contenues dans la réponse.
 */
export interface ApiResponse<T> {
  data: T;
  total?: number;
  error?: string;
}
