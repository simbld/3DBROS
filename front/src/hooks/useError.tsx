import { useCallback } from "react";
import { UseErrorReturnProps } from "@interfaces/errorTypes";
import { toast } from "react-toastify";
import { useErrorContext } from "@contexts/errorContext";

/**
 * Hook personnalisé pour gérer les erreurs et les afficher via des notifications.
 * @returns {UseErrorReturnProps} Gestionnaires d'erreurs, y compris triggerError, clearError et displayError.
 */
const useError = (): UseErrorReturnProps => {
  const { error, triggerError, clearError } = useErrorContext();

  /**
   * Affiche l'erreur actuelle sous forme de notification toast.
   */
  const displayError = useCallback(() => {
    if (error) {
      let errorMessage: string;

      // Gère différents types d'erreurs
      if ("message" in error && error.message) {
        errorMessage = error.message;
      } else if ("status" in error) {
        errorMessage = `Erreur : ${error.status}`;
      } else {
        errorMessage = "Une erreur inconnue est survenue";
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => clearError(),
      });
    }
  }, [clearError, error]);

  return { triggerError, clearError, displayError };
};

export default useError;
