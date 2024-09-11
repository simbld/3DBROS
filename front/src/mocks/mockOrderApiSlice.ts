export const useGetOrdersQuery = jest.fn().mockReturnValue({
  data: [
    { id: 1, productId: 1, quantity: 2, totalPrice: 20, status: "En cours" },
    { id: 2, productId: 2, quantity: 1, totalPrice: 10, status: "Livré" },
  ],
  error: null,
  isLoading: false,
});

export const orderApiSlice = {
  reducerPath: "orderApi",
  reducer: jest.fn(),
  middleware: jest.fn(),
  useGetOrdersQuery,
};
