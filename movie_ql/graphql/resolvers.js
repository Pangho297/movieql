const pangho = {
  name: "Pangho",
  age: 29,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => pangho,
  },
};

export default resolvers;
