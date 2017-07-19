import { readFile, readFileSync, readdir } from "fs";

// readFile("./package.json", "utf8", (err, data) => {
//     if (err) {
//         throw new Error(err.message);
//     }

//     console.log(data);
// });

// console.log(readFileSync("./package.json", "utf8"));

const filename = "./package.json";

const promisify = <T>(fn: (...fnArgs: any[]) => void) =>
    (...args: any[]) =>
        new Promise<T>((resolve, reject) => {
            fn(...args, (err: Error, value: T) => err ? reject(err) : resolve(value));
        });

const readFileAsync = promisify<string>(readFile);
const readdirAsync = promisify<string[]>(readdir);

async function reader(file: string) {
    console.log(await readFileAsync(file, "utf8"));
}

reader(filename);
