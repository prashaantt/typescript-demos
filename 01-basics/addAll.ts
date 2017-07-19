import { add } from "./add";

const addAll = (values: number[]) => values.reduce(add);

const numbers: number[] = [1, 2, 3, +"4"];

addAll(numbers)
