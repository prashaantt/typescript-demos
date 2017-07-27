import { Route } from "../router";

export const welcome: Route = {
    path: "/",
    handler: (req, res) => {
        res.end("Welcome to TypeScript!");
    }
}
