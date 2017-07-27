import { Route } from "../router";

export const bye: Route = {
    path: "/bye",
    handler: (req, res) => {
        res.setHeader("Content-Type", "application/json");
        const obj = { message: "Goodbye, world!" };
        res.end(JSON.stringify(obj));
    }
}
