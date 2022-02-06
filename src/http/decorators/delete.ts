import { HttpHandler } from "../models/http-handler";

export const deletetMapping = new Map<string, HttpHandler>();

export function Delete(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        deletetMapping.set(url, descriptor.value);
        return descriptor;
    }
}
