// custom hooks
export interface UseImageLoaderReturnProps {
  imageData: ImageData | null;
  loading: boolean;
}

export interface LoaderProps {
  barCount?: number;
  color?: string;
}

export interface UseDisplayReturnProps {
  display: string;
  setDisplay: (value: string) => Promise<void>;
  error: string | null;
  loading: boolean;
}

export interface UseModalReturnProps {
  modal: boolean;
  setModal: (value: boolean) => void;
}

export interface useLoadingReturnProps {
  loading: boolean;
  startLoading: () => void;
  endLoading: () => void;
  error: ErrorState | null;
  handleError: (error: Error) => void;
}

export interface UseFontLoaderReturnProps {
  fontLoaded: boolean;
  fontName: string;
  fontUrl: string;
}

// redux persist store
export interface RootStateProps {
  user: UserStateProps;
  product: ProductStateProps;
  cart: CartStateProps;
  order: OrderStateProps;
  auth: AuthStateProps;
}
