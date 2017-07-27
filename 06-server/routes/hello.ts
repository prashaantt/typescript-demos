import { Route } from "../router";

export const hello: Route = {
    path: "/hello",
    handler: (req, res) => {
        res.setHeader("Content-Type", "application/json");
        const obj = { message: "Hello, world!" };
        res.end(JSON.stringify(obj));
    }
}
