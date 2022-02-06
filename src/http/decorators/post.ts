import { HttpHandler } from "../models/http-handler";

export const postMapping = new Map<string, HttpHandler>();

export function Post(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        postMapping.set(url, descriptor.value);
        return descriptor;
    }
}