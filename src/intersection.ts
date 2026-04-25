type A = { name: string };
type B = { phno: number };

type Person = A & B;

const user: Person = {
  name: "parvez",
  phno: 349074,
};

console.log(user);
