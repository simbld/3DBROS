import type { NextPage } from "next";
import { useState } from "react";
import type { Product } from "src/interfaces/apiType";
import { useGetProductsQuery } from "src/services/apiSlice";

/**
 * Page d'accueil affichant des données récupérées via RTK Query.
 * @returns {JSX.Element} Composant de la page d'accueil.
 */

const Home: NextPage = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({
    page,
    limit: 10,
  });
  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.toString()}</div>;

  return (
    <div>
      <h1>Produits</h1>
      <ul>
        {data?.data.map((product: Product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => prev + 1)}>Suivant</button>
    </div>
  );
};

export default Home;
