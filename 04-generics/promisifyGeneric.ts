import { readFile, readdir } from "fs";

const filename = "./package.json";

const promisify = <T>(fn: (...fnArgs: any[]) => void) =>
    (...args: any[]) =>
        new Promise<T>((resolve, reject) => {
            fn(...args, (err: Error, value: T) => err ? reject(err) : resolve(value));
        });

const readFileAsync = promisify<string>(readFile);
const readdirAsync = promisify<string[]>(readdir);

async function reader(file: string) {
    // try {
    //     // const contents: string = await readFileAsync(file, "utf8");
    //     // console.log(contents);
    //     console.log(await readdirAsync("."))
    // } catch (err) {
    //     console.error(err.message);
    // }
    console.log(await readFileAsync(file, "utf8"));
}

reader(filename);
