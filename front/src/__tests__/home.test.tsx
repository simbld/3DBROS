import { render, screen } from "@testing-library/react";
import { useGetProductsQuery } from "@services/productApiSlice";
import Home from "@pages/index";

jest.mock("@services/productApiSlice");

describe("Home", () => {
  test("renders loading state", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<Home />);

    expect(screen.getByText("Chargement...")).toBeInTheDocument();
  });

  test("renders error state", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: { status: "FETCH_ERROR" },
      isLoading: false,
    });

    render(<Home />);

    expect(
      screen.getByText(
        "Impossible de se connecter au serveur. Vérifiez l'URL ou si le serveur est en cours d'exécution.",
      ),
    ).toBeInTheDocument();
  });

  test("renders data state", () => {
    const mockData = {
      data: {
        data: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      error: undefined,
      isLoading: false,
    };

    (useGetProductsQuery as jest.Mock).mockReturnValue(mockData);

    render(<Home />);

    expect(screen.getByText("Produits")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  test("renders loading state", () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<Home />);

    const loadingElements = screen.getAllByText("Chargement...");
    expect(loadingElements).toHaveLength(1);
  });
});
