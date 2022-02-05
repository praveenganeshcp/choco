import { HttpHandler } from "../models/http-handler";

export const postMapping = new Map<string, HttpHandler>();

export function Post(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        postMapping.set(url, routine);
    }
}