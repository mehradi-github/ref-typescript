console.log("Hello world!");

let a: number;
a = 0b0101; //binary
a = 0xfff; // hex
a = 0o671; // octal
console.log(a.toString(8));
console.log(a.toString(16));
a += 1;
console.log(a);

//array
let b: number[] = [1, 2, 3, 4];
b.shift();
b.push(10);
b.unshift(5);
console.log(b);
console.log(b.splice(1, 3));

// Dictionary
let c: { [id: string]: number[] } = { a: [1, 2, 3], b: [4, 5, 6] };
console.log(c);

//Tuple
let d: [string, boolean, number] = ["a", false, 1];
console.log(d[1]);

//Set
let e: Set<unknown> = new Set([1, "v", false, "v"]);
e.add("cat");
e.delete(false);
console.log(e);

// Type Aliases
type Animal = {
  name: string;
};
type Bear = Animal & {
  honey: boolean;
};

// Interface
interface Animal2 {
  name: string;
}

interface Bear2 extends Animal2 {
  honey: boolean;
}

// Function
const getFullname: (name: string, familly: string) => string = (
  name,
  familly
) => {
  return name.concat(" ", familly);
};

console.log(getFullname("a", "b"));

// narrowed type
const foo = (value: string | Date) => {
  if (value instanceof Date) return value.toUTCString();
  return value;
};
// void
const bar: (v: string) => void = (v) => {
  console.log(v);
};

// never
const bar2: (v: string) => never = (v) => {
  throw new Error("Fail");
};

// How do work DOM in Typescript?

// const el = document.querySelector(".foo") as HTMLInputElement | null;
// el?.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log(target.value);
// });

// what is enum in typescript?
enum stat {
  a,
  b,
  c,
}
const t1: { id: number; status: stat } = { id: 1, status: stat.a };

// How to work with generics in Typescript?
interface User<T> {
  name: string;
  data: T;
}
const user: User<{ meta: string }> = {
  name: "test",
  data: {
    meta: "meta 1",
  },
};

//array vs tuple
const a1: string[] = ["1", "2", "3"];
const a2: [string, number] = ["one", 1];

//Record Type
const salary: Record<string, number> = {
  annual: 70000,
  bonus: 1000,
};

// What is omit and pick in Typescript

interface User1 {
  id: number;
  name: string;
  age: number;
}
type Profile = Omit<User1, "age" | "name">;
type Staff = Pick<User1, "id" | "name">;

// Readonly
const user2: Readonly<Staff> = {
  id: 1,
  name: "Sara",
};

// What is partial in Typescript

const updateUser = (user: User1, fieldes: Partial<User1>) => {
  return { ...user, ...fieldes };
};
const u1: User1 = {
  id: 1,
  name: "Sara",
  age: 30,
};
const updatedUser = updateUser(u1, { age: 25 });
console.log(updatedUser);

// What is required in Typescript
interface User2 {
  id?: number;
  name?: string;
  age?: number;
}
const u2: Required<User2> = {
  id: 1,
  name: "Sara",
  age: 20,
};

// What is literal type in Typescript
type Easing = "ease-in" | "ease-out" | "ease-in-out";

// What is extends in Typescript
type CustomNonNullable<T> = T extends null | undefined ? never : T;

// What is infer in Typescript
type CustomReturnType<T> = T extends (first: infer F, ...args: any[]) => any
  ? F
  : any;
type a = CustomReturnType<(first: string, age: number) => void>;
// example 2
type ArayType<T> = T extends (infer item)[] ? item : T;
type a2 = ArayType<[string, number]>;
