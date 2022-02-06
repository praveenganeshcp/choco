import { HttpHandler } from "../models/http-handler";

export const getMapping = new Map<string, HttpHandler>();

export function Get(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        getMapping.set(url, descriptor.value);
        return descriptor;
    }
}