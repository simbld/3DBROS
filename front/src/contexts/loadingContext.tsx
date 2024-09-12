/* eslint-disable react/prop-types */
import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextProps {
  loading: boolean;
  startLoading: () => void;
  endLoading: () => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined,
);

export const useLoadingContext = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(
      "useLoadingContext doit être utilisé dans un LoadingProvider",
    );
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, startLoading, endLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
