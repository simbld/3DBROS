export const useGetCartItemsQuery = jest.fn().mockReturnValue({
  data: [
    { productId: 1, name: "Produit 1", quantity: 2, price: 20 },
    { productId: 2, name: "Produit 2", quantity: 1, price: 10 },
  ] as CartItem[],
  error: null,
  isLoading: false,
});

export const cartApiSlice = {
  reducerPath: "cartApi",
  reducer: jest.fn(() => ({})),
  middleware: jest.fn(),
  useGetCartItemsQuery,
};
