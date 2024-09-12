import { setupServer } from "msw/node";
import { rest } from "msw";

// Crée un serveur qui simule les requêtes API
export const server = setupServer(
  rest.get("/cart", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [{ productId: 1, name: "Produit 1", quantity: 2 }],
        totalQuantity: 2,
        totalPrice: 50,
      }),
    );
  }),
);
