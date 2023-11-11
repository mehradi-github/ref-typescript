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

// What is a narrowed type?
// - the process of knowing the type of a variable is known as type narrowing, which is a way to assert the type to act based on the result. By doing this process, you can get a more specific type, allowing you to perform the correct action, and make your code more expressive and less error prone.
const foo = (value: string | Date) => {
  if (value instanceof Date) return value.toUTCString();
  return value;
};
