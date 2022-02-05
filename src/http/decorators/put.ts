import { HttpHandler } from "../models/http-handler";

export const putMapping = new Map<string, HttpHandler>();

export function Put(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        putMapping.set(url, routine);
    }
}