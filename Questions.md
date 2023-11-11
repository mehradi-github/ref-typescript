# Typescript

1.  what is Typescript?
    - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
2.  Implicit vs Explicit Types
    - Implicit types come from TypeScript inferring the type based on a variable's initial value and look just like regular JavaScript.
    - Explicit types are when we intentionally provide the type using a special TypeScript syntax.
3.  What is interface in typescript
    - a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have
4.  What is a type in typescript
    - a type is a convenient way to refer to the different properties and functions that a value has
5.  What is the difference between a type and an interface in typescrip
    - **interfaces are open and type aliases are closed**
6.  What is union in typescript
    - A union type describes a value that can be one of several types. We use the vertical bar ( | ) to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean .
7.  What is a narrowed type?
    - the process of knowing the type of a variable is known as type narrowing, which is a way to assert the type to act based on the result. By doing this process, you can get a more specific type, allowing you to perform the correct action, and make your code more expressive and less error prone.
8.  What is void in typescript?
    - void: represents the return value of functions which don't return a value.
9.  What is never type in typescript?

    - TypeScript introduced a new type never , which indicates the values that will never occur. The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.

10. What is unknown type in typescript?

    - TypeScript 3.0 introduces a new top type unknown . unknown is the type-safe counterpart of any . Anything is assignable to unknown , but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing.

11. What is a record type in Typescript

    - the Record type simply allows us to define dictionaries, also referred to as key-value pairs, with a fixed type for the keys and a fixed type for the values.

12. What is literal type in Typescript

    - Literal Types in TypeScript allow you to specify exact values for variables or properties. Unlike regular types that can represent a range of possible values, literal types restrict the value to a specific literal value, providing precise and self-documenting code.

13. What is d.ts file in Typescript
    - .d.ts files are called type declaration files. They exist for one purpose only: to describe the shape of an existing module and they only contain type information used for type checking.
