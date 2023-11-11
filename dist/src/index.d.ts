declare let a: number;
declare let b: number[];
declare let c: {
    [id: string]: number[];
};
declare let d: [string, boolean, number];
declare let e: Set<unknown>;
type Animal = {
    name: string;
};
type Bear = Animal & {
    honey: boolean;
};
interface Animal2 {
    name: string;
}
interface Bear2 extends Animal2 {
    honey: boolean;
}
declare const getFullname: (name: string, familly: string) => string;
declare const foo: (value: string | Date) => string;
declare const bar: (v: string) => void;
declare const bar2: (v: string) => never;
declare enum stat {
    a = 0,
    b = 1,
    c = 2
}
declare const t1: {
    id: number;
    status: stat;
};
interface User<T> {
    name: string;
    data: T;
}
declare const user: User<{
    meta: string;
}>;
declare const a1: string[];
declare const a2: [string, number];
declare const salary: Record<string, number>;
interface User1 {
    id: number;
    name: string;
    age: number;
}
type Profile = Omit<User1, "age" | "name">;
type Staff = Pick<User1, "id" | "name">;
declare const user2: Readonly<Staff>;
declare const updateUser: (user: User1, fieldes: Partial<User1>) => {
    id: number;
    name: string;
    age: number;
};
declare const u1: User1;
declare const updatedUser: {
    id: number;
    name: string;
    age: number;
};
interface User2 {
    id?: number;
    name?: string;
    age?: number;
}
declare const u2: Required<User2>;
type Easing = "ease-in" | "ease-out" | "ease-in-out";
//# sourceMappingURL=index.d.ts.map