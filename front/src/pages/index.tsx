import type { NextPage } from "next";
import { useState, useEffect } from "react";

/**
 * Composant avec gestion du chargement.
 */
const Home: NextPage = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement plus court en mode test
    const delay = process.env.NODE_ENV === "test" ? 100 : 1000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Produits</h1>
      <ul>
        <li>Produit 1</li>
        <li>Produit 2</li>
      </ul>
    </div>
  );
};

export default Home;
