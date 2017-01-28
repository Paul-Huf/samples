import { Request, Response } from "express";

export function read(request: Request, response: Response, next: Function): void {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ a: 1 }));
}
