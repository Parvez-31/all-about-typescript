// PROBLEM:
// function printValue(value: string | number): void {
//   console.log(value.toUpperCase());
//   console.log(value.toFixed(2));
// }

// printValue("Hello World");
// printValue(34);

// SOLUTION:
// function printValue(value: string | number): void {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// printValue("Hello World");
// printValue(34);

// for object

// interface Admin {
//   name: string;
//   role: string;
// }
// interface User {
//   name: string;
//   mail: string;
// }

// const admin: Admin = {
//   name: "parvez",
//   role: "manager",
// };

// const user: User = {
//   name: "dodo",
//   mail: "dodo@gmail.com",
// };

// function getInfo(person: Admin | User): void {
//   if ("role" in person) {
//     console.log(person.name);
//     console.log(person.role);
//   } else {
//     console.log(person.name);
//     console.log(person.mail);
//   }
// }

// getInfo(admin);
// getInfo(user);

// interface Dog {
//   bark: () => void;
// }
// interface Cat {
//   meow: () => void;
// }

// const dog: Dog = {
//   bark() {
//     console.log("woof woof");
//   },
// };
// const cat: Cat = {
//   meow() {
//     console.log("woof woof");
//   },
// };

// function isDog(animal: Dog | Cat): animal is Dog {
//   return (animal as Dog).bark !== undefined;
// }

// function makeSound(animal: Dog | Cat): void {
//   if (isDog(animal)) {
//     console.log("this is a dog");
//     animal.bark();
//   } else {
//     console.log("this is a cat");
//     animal.meow();
//   }
// }

// makeSound(dog);
// makeSound(cat);

// array
// let arr: (string | number | boolean)[] = [
//   "parvez",
//   23,
//   "mota",
//   898,
//   true,
//   false,
// ];

// arr.forEach((item) => {
//   if (typeof item === "string") {
//     console.log(item.toUpperCase());
//   } else if (typeof item === "number") {
//     console.log(item.toFixed());
//   }
// });

// For object array
// interface Admin {
//   name: string;
//   age: number;
// }
// interface User {
//   name: string;
//   role: string;
// }

// const people: (Admin | User)[] = [
//   { name: "samim", age: 49 },
//   {
//     name: "mota",
//     role: "manager",
//   },
// ];
