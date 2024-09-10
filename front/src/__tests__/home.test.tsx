import { render, screen, waitFor } from "@testing-library/react";
import Home from "@pages/index";

test("affiche le message de chargement", () => {
  render(<Home />);

  // Vérifie que le texte de chargement est affiché
  expect(screen.getByText(/chargement/i)).toBeInTheDocument();
});

test("affiche les produits après le chargement", async () => {
  render(<Home />);

  // Utilise waitFor pour attendre que le texte des produits apparaisse après le chargement
  await waitFor(() =>
    expect(screen.getByText(/Produit 1/i)).toBeInTheDocument(),
  );

  // Vérifie que les produits sont affichés
  expect(screen.getByText(/Produit 2/i)).toBeInTheDocument();
});
