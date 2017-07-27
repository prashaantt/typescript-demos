import { createServer } from "http";
import { registerRoutes, serveRoutes, Route } from "./router";

export const serve = (routes: Route[], port: number) => {
    registerRoutes(routes);
    createServer(serveRoutes).listen(port, console.error);
    console.log("Server listening on port", port);
}
