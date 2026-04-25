// union either this or that
let value: string | number | boolean;
value = "hello";
value = true;
value = 23232;

function hello(id: number | string): string | number {
  return id;
}

console.log(hello(2323));
console.log(hello("2392783"));
