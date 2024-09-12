export const useGetUsersQuery = jest.fn().mockReturnValue({
  data: [
    {
      id: 1,
      firstName: "firstNameUser 1",
      lastName: "lastNameUser 2",
      email: "user1@example.com",
      role: "admin",
    },
    {
      id: 2,
      firstName: "firstNameUser 2",
      lastName: "lastNameUser 2",
      email: "user2@example.com",
      role: "user",
    },
  ],
  error: null,
  isLoading: false,
});

export const userApiSlice = {
  reducerPath: "userApi",
  reducer: jest.fn(),
  middleware: jest.fn(),
  useGetUsersQuery,
};
