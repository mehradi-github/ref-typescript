"use strict";
console.log("Hello world!");
let a;
a = 0b0101; //binary
a = 0xfff; // hex
a = 0o671; // octal
console.log(a.toString(8));
console.log(a.toString(16));
a += 1;
console.log(a);
//array
let b = [1, 2, 3, 4];
b.shift();
b.push(10);
b.unshift(5);
console.log(b);
console.log(b.splice(1, 3));
// Dictionary
let c = { a: [1, 2, 3], b: [4, 5, 6] };
console.log(c);
//Tuple
let d = ["a", false, 1];
console.log(d[1]);
//Set
let e = new Set([1, "v", false, "v"]);
e.add("cat");
e.delete(false);
console.log(e);
// Function
const getFullname = (name, familly) => {
    return name.concat(" ", familly);
};
console.log(getFullname("a", "b"));
// narrowed type
const foo = (value) => {
    if (value instanceof Date)
        return value.toUTCString();
    return value;
};
// void
const bar = (v) => {
    console.log(v);
};
// never
const bar2 = (v) => {
    throw new Error("Fail");
};
// How do work DOM in Typescript?
// const el = document.querySelector(".foo") as HTMLInputElement | null;
// el?.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log(target.value);
// });
// what is enum in typescript?
var stat;
(function (stat) {
    stat[stat["a"] = 0] = "a";
    stat[stat["b"] = 1] = "b";
    stat[stat["c"] = 2] = "c";
})(stat || (stat = {}));
const t1 = { id: 1, status: stat.a };
const user = {
    name: "test",
    data: {
        meta: "meta 1",
    },
};
//array vs tuple
const a1 = ["1", "2", "3"];
const a2 = ["one", 1];
//Record Type
const salary = {
    annual: 70000,
    bonus: 1000,
};
// Readonly
const user2 = {
    id: 1,
    name: "Sara",
};
// What is partial in Typescript
const updateUser = (user, fieldes) => {
    return Object.assign(Object.assign({}, user), fieldes);
};
const u1 = {
    id: 1,
    name: "Sara",
    age: 30,
};
const updatedUser = updateUser(u1, { age: 25 });
console.log(updatedUser);
const u2 = {
    id: 1,
    name: "Sara",
    age: 20,
};
