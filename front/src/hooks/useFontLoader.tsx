import { useEffect, useState } from "react";
import { UseFontLoaderReturnProps } from "@interfaces/commonTypes";

/**
 * Hook permettant de charger une police de caractères.
 * @param {string} fontName - Nom de la police de caractères.
 * @param {string} fontUrl - URL de la police de caractères.
 * @param {number} [fontWeight] - (Facultatif) Poids de la police.
 * @returns {UseFontLoaderReturnProps} - Vrai si la police est chargée, faux sinon.
 */
const useFontLoader = (
  fontName: string,
  fontUrl: string,
  fontWeight?: number,
): UseFontLoaderReturnProps => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadFont = async () => {
      try {
        // Vérification du support de FontFace
        if (typeof FontFace === "undefined") {
          throw new Error("FontFace is not supported");
        }

        if (typeof document === "undefined" || document.fonts == null) {
          throw new Error("FontFaceSet is not supported");
        }

        // Création de l'instance de FontFace
        const fontFace = new FontFace(fontName, `url('${fontUrl}')`, {
          weight: fontWeight?.toString(),
        });

        // Ajout de la police à document.fonts
        (document.fonts as any).add(fontFace);

        // Chargement de la police
        await fontFace.load();
        setIsLoaded(true);
      } catch (error) {
        console.error("Erreur lors du chargement de la police : ", error);
      }
    };

    loadFont();
  }, [fontName, fontUrl, fontWeight]);

  return { fontLoaded: isLoaded, fontName };
};

export default useFontLoader;
