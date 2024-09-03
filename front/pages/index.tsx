import type { NextPage } from "next";
import type { Product } from "src/interfaces/apiType";
import { useGetProductsQuery } from "src/services/apiSlice";

/**
 * Page d'accueil affichant des données récupérées via RTK Query.
 * @returns {JSX.Element} Composant de la page d'accueil.
 */

const Home: NextPage = (): JSX.Element => {
  const { data, error, isLoading } = useGetProductsQuery({
    page: 1,
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
    </div>
  );
};

export default Home;
