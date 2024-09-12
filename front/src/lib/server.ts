import { setupServer } from "msw/node";
import { rest } from "msw";

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
