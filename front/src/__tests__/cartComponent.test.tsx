import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@store/store";
import CartComponent from "@components/cartComponent";
import { server } from "@lib/server";

// Mock API pour simuler des réponses
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test pour vérifier le comportement lorsque certains articles ont une quantité nulle
test("vérifie que le composant affiche un message pour les articles avec quantité nulle", async () => {
  const cartWithZeroQuantity = {
    items: [
      { productId: 1, name: "Produit 1", quantity: 0, price: 25 },
      { productId: 2, name: "Produit 2", quantity: 2, price: 50 },
    ],
    totalQuantity: 2,
    totalPrice: 100,
  };

  render(
    <Provider store={store}>
      <CartComponent cart={cartWithZeroQuantity} />
    </Provider>,
  );

  // Le composant doit afficher un message si un article a une quantité de zéro
  expect(
    screen.getByText("Certains articles du panier ont une quantité nulle."),
  ).toBeInTheDocument();
});

// Test pour vérifier que les produits s'affichent correctement si tous les articles ont une quantité positive
test("vérifie que le total des articles et le prix sont corrects", async () => {
  const cartWithItems = {
    items: [
      { productId: 1, name: "Produit 1", quantity: 1, price: 25 },
      { productId: 2, name: "Produit 2", quantity: 2, price: 50 },
      { productId: 3, name: "Produit 3", quantity: 3, price: 75 },
    ],
    totalQuantity: 6,
    totalPrice: 150,
  };

  render(
    <Provider store={store}>
      <CartComponent cart={cartWithItems} />
    </Provider>,
  );

  // Vérification des éléments de la liste
  expect(screen.getByText(/Produit 1/)).toBeInTheDocument();
  expect(screen.getByText(/Quantité: 1/)).toBeInTheDocument();
  expect(screen.getByText(/Prix: 25€/)).toBeInTheDocument();

  expect(screen.getByText(/Produit 2/)).toBeInTheDocument();
  expect(screen.getByText(/Quantité: 2/)).toBeInTheDocument();
  expect(screen.getByText(/Prix: 50€/)).toBeInTheDocument();

  expect(screen.getByText(/Produit 3/)).toBeInTheDocument();
  expect(screen.getByText(/Quantité: 3/)).toBeInTheDocument();
  expect(screen.getByText(/Prix: 75€/)).toBeInTheDocument();

  // Vérifie que les totaux sont corrects
  expect(screen.getByText(/Total des articles : 6/i)).toBeInTheDocument();
  expect(screen.getByText(/Prix total : 150€/i)).toBeInTheDocument();
});

test("vérifie que le panier est vide", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <CartComponent cart={null} />
    </Provider>,
  );

  expect(getByText("Votre panier est vide.")).toBeInTheDocument();
});

test("vérifie que certains articles ont une quantité nulle", async () => {
  const cartWithZeroQuantity = {
    items: [
      { productId: 1, name: "Produit 1", quantity: 1, price: 25 },
      { productId: 2, name: "Produit 2", quantity: 0, price: 0 },
      { productId: 3, name: "Produit 3", quantity: 2, price: 50 },
    ],
    totalQuantity: 3,
    totalPrice: 75,
  };

  const { getByText } = render(
    <Provider store={store}>
      <CartComponent cart={cartWithZeroQuantity} />
    </Provider>,
  );

  expect(
    getByText("Certains articles du panier ont une quantité nulle."),
  ).toBeInTheDocument();
});

test("vérifie que les articles et les totaux sont corrects", async () => {
  const cartWithItems = {
    items: [
      { productId: 1, name: "Produit 1", quantity: 1, price: 25 },
      { productId: 2, name: "Produit 2", quantity: 2, price: 50 },
      { productId: 3, name: "Produit 3", quantity: 3, price: 75 },
    ],
    totalQuantity: 6,
    totalPrice: 150,
  };

  render(
    <Provider store={store}>
      <CartComponent cart={cartWithItems} />
    </Provider>,
  );

  expect(screen.getByText("Panier")).toBeInTheDocument();

  expect(screen.getByText(/Produit 1/)).toBeInTheDocument();
  expect(screen.getByText(/Quantité: 1/)).toBeInTheDocument();
  expect(screen.getByText(/Prix: 25€/)).toBeInTheDocument();

  expect(screen.getByText(/Produit 2/)).toBeInTheDocument();
  expect(screen.getByText(/Quantité: 2/)).toBeInTheDocument();
  expect(screen.getByText(/Prix: 50€/)).toBeInTheDocument();

  expect(screen.getByText(/Produit 3/)).toBeInTheDocument();
  expect(screen.getByText(/Quantité: 3/)).toBeInTheDocument();
  expect(screen.getByText(/Prix: 75€/)).toBeInTheDocument();

  expect(screen.getByText(/Total des articles : 6/i)).toBeInTheDocument();
  expect(screen.getByText(/Prix total : 150€/i)).toBeInTheDocument();
});
