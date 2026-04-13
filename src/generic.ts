// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity<string>("hello"));

// function getFirst<T>(arg: T[]): T {
//   return arg[2];
// }

// console.log(getFirst<number>([1, 2, 3]));
// console.log(getFirst<string>(["Parvez", "Hossien", "Tarafder"]));

// function pair<T, U>(a: T, b: U): [T, U] {
//   return [a, b];
// }

// console.log(pair<string, number>("parvez", 31));

// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//   return { ...obj1, ...obj2 };
// }
// console.log(merge({ name: "parvez" }, { phno: 203283 }));

// function printLength<T extends { length: number }>(item: T): void {
//   console.log(item.length);
// }

// printLength("Hello");
// printLength([1, 2, 3]);
