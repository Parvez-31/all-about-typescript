// type User = {
//   name: string;
//   age: number;
// };

// interface User {
//   name: string;
//   age: number;
// }

// interface Person {
//   name: string;
// }

// interface Student extends Person {
//   grade: number;
// }

// type Person = {
//   name: string;
// };

// type Student = Person & {
//   grade: number;
// };

// type status = "success | error | loading";

// interface IUser {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// interface IUser2 extends IUser {
//   roll: number;
// }

// function getUserInfo(user: IUser2): string {
//   return `${user.name} ${user.roll} (${user.email}) is ${user.isActive ? "Active" : "Inactive"}`;
// }

// const user1: IUser2 = {
//   id: 1,
//   name: "jhon",
//   email: "jhon@gmail.com",
//   roll: 23,
//   isActive: true,
// };

// console.log(getUserInfo(user1));

// type User = {
//   name: string;
//   age: number;
// };

// const user1: User = {
//   name: "Rahul",
//   age: 45,
// };

// function hello(user: User): string {
//   return `Hello ${user.name}`;
// }

// console.log(hello(user1));
