// context providers
export interface ErrorState {
  message: string;
  code: number;
}

export interface UseErrorReturnProps {
  triggerError: (error: ErrorState) => void;
  clearError: () => void;
  displayError: () => void;
}

export interface ErrorContextType {
  error: ErrorState | null;
  triggerError: (error: ErrorState) => void;
  clearError: () => void;
}

export interface CustomError extends Error {
  statusCode?: number;
  code?: number;
}

export interface FetchBaseQueryError {
  status: number;
  data?: {
    message?: string;
  };
}

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
}

export interface ErrorMessageProps {
  message: string;
}
