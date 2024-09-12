// redux persist store
export interface RootStateProps {
  user: UserStateProps;
  product: ProductStateProps;
  cart: CartStateProps;
  order: OrderStateProps;
  auth: AuthStateProps;
}

// common
export interface LoaderProps {
  barCount?: number;
  color?: string;
}

// hooks
export interface UseImageLoaderReturnProps {
  imageData: ImageData | null;
  loading: boolean;
}

export interface UseDisplayReturnProps {
  display: string;
  updateDisplay: (newValue: string) => void;
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
  error?: ErrorState | null;
  handleError: (error: Error) => void;
}

export interface LoadingContextProps {
  loading: boolean;
  startLoading: () => void;
  endLoading: () => void;
}

export interface UseFontLoaderReturnProps {
  fontLoaded: boolean;
  fontName: string;
  fontWeight?: number;
}

export interface CartComponentProps {
  cart: Cart | null;
}
