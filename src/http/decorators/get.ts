import { HttpHandler } from "../models/http-handler";

export const getMapping = new Map<string, HttpHandler>();

export function Get(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        getMapping.set(url, routine);
    }
}