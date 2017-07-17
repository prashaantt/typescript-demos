import { add } from "./add";

const numbers = [1, 2, 3, "4"];

const addAll = (values: number[]) => values.reduce(add);

// const add = (a: number, b: number) => a + b;

// console.log(addAll(numbers));

// for (const num of numbers) {
//     console.log(num - 10);
// }
