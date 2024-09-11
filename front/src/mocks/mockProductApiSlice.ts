export const useGetProductsQuery = jest.fn().mockReturnValue({
  data: [
    {
      id: 1,
      name: "Produit 1",
      price: 10,
      stock: 5,
      description: "Un super produit",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 20,
      stock: 10,
      description: "Un produit encore meilleur",
    },
  ],
  error: null,
  isLoading: false,
});

export const productApiSlice = {
  reducerPath: "productApi",
  reducer: jest.fn(() => ({})),
  middleware: jest.fn(),
  useGetProductsQuery,
};
