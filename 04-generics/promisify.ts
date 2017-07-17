import { readFile, readFileSync, readdir, readdirSync, createReadStream } from "fs";
import { createInterface } from "readline";

// readFile("./package.json", "utf8", (err, data) => {

//     if (err) {
//         throw err;
//     }

//     console.log(data);
// })

// console.log(readFileSync("./package.json", "utf8"));

const promisify = <T>(fn: (...args: any[]) => void) => {
    return (...fnArgs: any[]) =>
        new Promise<T>((resolve, reject) =>
            fn(...fnArgs, (err: Error, value: T) => err ? reject(err) : resolve(value))
        )
}

const reader = async (filename: string) => {
    try {
        const contents: string = await readFileAsync("./package.json", "utf8");
        console.log(contents);
    } catch (e) {
        console.error(e.message);
        // throw {
        //     name: "hey",
        //     message: e.message,
        //     what: "what"
        // }
    }
    // console.log(await readFileAsync("./package.json", "utf8"));
}

const readFileAsync = promisify<string>(readFile);
const readdirAsync = promisify<string[]>(readdir);
reader("./package.json")

if (true) {
    const f = () => { };
}
