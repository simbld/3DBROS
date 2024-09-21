/**
 * 
 * import { setupServer } from "msw/node";
 * import { rest } from "msw";

  // Crée un serveur qui simule les requêtes API
  export const server = setupServer(
    rest.get("/cart", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          items: [
            { productId: 1, name: "Produit 1", quantity: 1, price: 25 },
            { productId: 2, name: "Produit 2", quantity: 2, price: 50 },
            { productId: 3, name: "Produit 3", quantity: 0, price: 0 },
            { productId: 4, name: "Produit 4", quantity: 1, price: 50 },
          ],
          totalQuantity: 4,
          totalPrice: 125,
        }),
      );
    }),
  );

 * 
 */

import type { CartComponentProps } from "@interfaces/commonTypes";

const CartComponent: React.FC<CartComponentProps> = ({ cart }) => {
  // Si le panier est vide ou non défini
  if (!cart || cart.items.length === 0) {
    return <p>Votre panier est vide.</p>;
  }

  // Si certains articles ont une quantité nulle
  const itemsWithZeroQuantity = cart.items.filter(
    (item) => item.quantity === 0,
  );
  if (itemsWithZeroQuantity.length > 0) {
    return <p>Certains articles du panier ont une quantité nulle.</p>;
  }

  return (
    <div>
      <h1>Panier</h1>
      <ul>
        {cart.items.map((item: CartItem) => (
          <li key={item.productId}>
            {item.name} - Quantité: {item.quantity} - Prix: {item.price}€
          </li>
        ))}
      </ul>

      <p>Total des articles : {cart.totalQuantity}</p>
      <p>Prix total : {cart.totalPrice}€</p>
    </div>
  );
};

export default CartComponent;
