export const people = [
  {
    id: 0,
    name: "Pangho",
    age: 29,
    gender: "male",
  },
  {
    id: 1,
    name: "Patrick",
    age: 26,
    gender: "male",
  },
  {
    id: 2,
    name: "Dave",
    age: 17,
    gender: "male",
  },
  {
    id: 3,
    name: "Frank",
    age: 25,
    gender: "male",
  },
  {
    id: 4,
    name: "Dona",
    age: 12,
    gender: "female",
  },
  {
    id: 5,
    name: "Brand",
    age: 29,
    gender: "male",
  },
  {
    id: 6,
    name: "Steave",
    age: 23,
    gender: "male",
  },
  {
    id: 7,
    name: "Edey",
    age: 26,
    gender: "male",
  },
];

export const getById = (id) => {
  const filterdPeople = people.filter((person) => id === person.id);
  return filterdPeople[0];
};
