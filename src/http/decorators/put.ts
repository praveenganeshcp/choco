import { HttpHandler } from "../models/http-handler";

export const putMapping = new Map<string, HttpHandler>();

export function Put(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        putMapping.set(url, descriptor.value);
        return descriptor;
    }
}