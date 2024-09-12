/* eslint-disable react/prop-types */
import { createContext, useContext, ReactNode, useState } from "react";
import { ErrorContextType, type ErrorState } from "@interfaces/errorTypes";

/**
 * @description Fournit un contexte global pour la gestion des erreurs dans l'application.
 */
// Création du contexte
const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

/**
 * Hook personnalisé pour utiliser le contexte d'erreur.
 * @returns {ErrorContextType} Les gestionnaires d'erreurs.
 * @throws {Error} Lance une erreur si le hook est utilisé en dehors du ErrorProvider.
 */
// Hook pour utiliser le contexte d'erreur
export const useErrorContext = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useErrorContext doit être utilisé dans un ErrorProvider");
  }
  return context;
};

/**
 * Composant fournisseur du contexte d'erreur.
 * @param {ReactNode} children - Les composants enfants qui peuvent accéder au contexte d'erreur.
 * @returns {JSX.Element} Le contexte d'erreur fourni à ses enfants.
 */
// Fournisseur du contexte d'erreur
export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<ErrorState | null>(null);

  const triggerError = (error: ErrorState) => {
    setError(error);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={{ error, triggerError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
