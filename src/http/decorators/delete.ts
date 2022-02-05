import { HttpHandler } from "../models/http-handler";

export const deletetMapping = new Map<string, HttpHandler>();

export function Delete(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        deletetMapping.set(url, routine);
    }
}
