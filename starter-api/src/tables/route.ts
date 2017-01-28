import { Express, Router } from "express";
import { read } from "./read";

export function route(app: Express) {
        app.route("/")
            .get(read);
}