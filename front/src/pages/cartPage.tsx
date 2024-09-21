import ErrorMessage from "@common/errorMessage";
import Loader from "@common/loader";
import CartComponent from "@components/cartComponent";
import useError from "@hooks/useError";
import useLoading from "@hooks/useLoading";
import { useGetCartQuery } from "@services/cartApiSlice";
import errorCodeMessages from "@utils/errorCodeMessages";

/**
 * Page pour afficher le panier.
 * @returns {JSX.Element} Composant de la page panier.
 */
const CartPage = (): JSX.Element => {
  const { data: cart, error: apiError, isLoading } = useGetCartQuery();
  const { triggerError } = useError();
  const { startLoading, endLoading } = useLoading();

  if (isLoading) {
    startLoading();
    return <Loader />;
  }

  if (apiError) {
    // Récupère le message d'erreur basé sur le code d'erreur ou utilise un message par défaut
    const errorCode = (apiError as { status?: number }).status || 500;
    const errorMessage =
      errorCodeMessages[errorCode] || "Une erreur inconnue est survenue.";

    // Utilise `triggerError` pour enregistrer l'erreur dans le système d'erreur global
    triggerError({ message: errorMessage, code: errorCode });

    // Affiche un message d'erreur personnalisé basé sur le code d'erreur
    return <ErrorMessage message={`Erreur ${errorCode}: ${errorMessage}`} />;
  }

  endLoading();

  if (!cart || cart.items.length === 0) {
    return <p>Votre panier est vide.</p>;
  }

  return (
    <div>
      <h1>Votre Panier</h1>
      <CartComponent cart={cart} />
    </div>
  );
};

export default CartPage;
