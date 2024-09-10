import { render, screen } from "@testing-library/react";
import Home from "@pages/index";

test("affiche les produits", () => {
  render(<Home />);

  // Vérifie que les produits sont affichés
  expect(screen.getByText(/Produit 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Produit 2/i)).toBeInTheDocument();
});
