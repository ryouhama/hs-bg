export const useUser = () => {
  const dummyUser: User = {
    id: 1,
    name: "ryou hama",
  };

  return {
    user: dummyUser,
  };
};
