import type { NextPage } from "next";
import { useState } from "react";
import { useGetProductsQuery } from "@services/productApiSlice";
import Loader from "@common/loader";
import ErrorMessage from "@common/errorMessage";

/**
 * Récupère les produits via RTK Query.
 * @param {Object} param - Paramètres de la requête.
 * @param {number} param.page - Le numéro de la page.
 * @param {number} param.limit - Le nombre de produits par page.
 * @returns {Object} Un objet contenant les produits, l'état de chargement et l'erreur éventuelle.
 */
const Home: NextPage = (): React.JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({
    page,
    limit: 10,
  });

  // Gestion de l'état de chargement
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  // Gestion des erreurs
  if (error) {
    return (
      <div>
        <ErrorMessage message="Erreur serveur" />
      </div>
    );
  }

  // Si les données sont disponibles, on les affiche
  if (data) {
    return (
      <div>
        <h1>Produits</h1>
        <ul>
          {data?.data?.map((product: Product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
        <button onClick={() => setPage((prev) => prev + 1)}>Suivant</button>
      </div>
    );
  }

  // Retour par défaut si ni isLoading, ni error, ni data n'est présent
  return <div>Aucune donnée disponible pour le moment.</div>;
};

export default Home;
