// context providers
export interface ErrorContextTypeProps {
  error: Error | null;
  setError: (error: Error | null) => void;
  displayError: () => void;
  clearError: () => void;
}

export type ErrorState =
  | CustomError
  | FetchBaseQueryError
  | SerializedError
  | null;

export interface CustomError extends Error {
  statusCode?: number;
  code?: number;
}

export interface FetchBaseQueryError {
  status: number;
  data: unknown;
}

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
}

export interface ErrorState {
  message: string;
  code: number;
}

export interface UseErrorReturnProps {
  error: ErrorState;
  setError: (error: ErrorState) => void;
  displayError: () => void;
  clearError: () => void;
  triggerError: (errorMessage: string) => void;
}

export interface ErrorMessageReturnProps {
  error: ErrorState | null;
  clearError: () => void;
}
