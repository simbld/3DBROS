import { useErrorContext } from "@contexts/errorContext";
import { useLoadingContext } from "@contexts/loadingContext";
import type { useLoadingReturnProps } from "@interfaces/commonTypes";
import type { CustomError, ErrorState } from "@interfaces/errorTypes";

/**
 * Hook personnalisé pour gérer le chargement et les erreurs avec le contexte d'erreur global.
 * @returns {useLoadingReturnProps} Gestionnaires de chargement et d'erreurs.
 */
const useLoading = (): useLoadingReturnProps => {
  const { loading, startLoading, endLoading } = useLoadingContext();
  const { triggerError } = useErrorContext();

  const handleError = (error: Error | CustomError) => {
    const errorState: ErrorState = {
      message: error.message,
      code:
        (error as CustomError).statusCode || (error as CustomError).code || 0,
    };
    triggerError(errorState);
    endLoading();
  };

  return { loading, startLoading, endLoading, handleError };
};

export default useLoading;
