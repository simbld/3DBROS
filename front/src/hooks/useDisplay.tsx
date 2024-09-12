import { useErrorContext } from "@contexts/errorContext";
import { UseDisplayReturnProps } from "@interfaces/commonTypes";
import { useState, useEffect } from "react";
import useLoading from "@hooks/useLoading";

/**
 * Hook personnalisé pour gérer l'affichage d'une valeur.
 * @param {string} initialValue - La valeur initiale à afficher.
 * @returns {UseDisplayReturnProps} Les gestionnaires d'affichage.
 */
const useDisplay = (initialValue: string = ""): UseDisplayReturnProps => {
  const [display, setDisplay] = useState<string>(initialValue);
  const { triggerError, clearError } = useErrorContext();
  const { loading, startLoading, endLoading } = useLoading();

  /**
   * Met à jour l'affichage.
   * @param {string} newValue - La nouvelle valeur à afficher.
   */
  const updateDisplay = (newValue: string): void => {
    try {
      startLoading();
      clearError();
      setDisplay(newValue);
      endLoading();
    } catch (error) {
      triggerError({ message: (error as Error).message, code: 500 });
      endLoading();
    }
  };

  useEffect(() => {
    if (display === "") {
      triggerError({ message: "Affichage vide non autorisé", code: 400 });
    }
  }, [display, triggerError]);

  return { display, updateDisplay, loading };
};

export default useDisplay;
