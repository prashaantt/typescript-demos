import { IncomingMessage, ServerResponse } from "http";

export interface Route {
    path: string;
    handler: (req: IncomingMessage, res: ServerResponse) => void;
}

const registeredRoutes: Route[] = [];

export const registerRoutes = (routes: Route[]) => {
    routes.forEach(route => registeredRoutes.push(route));
}

export const serveRoutes = (req: IncomingMessage, res: ServerResponse) => {
    const route = registeredRoutes.reverse().find(route => route.path === req.url);
    if (route) {
        return route.handler(req, res);
    }

    res.statusCode = 404;

    return res.end("Not found!");
}
