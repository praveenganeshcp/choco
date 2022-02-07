import { HttpHandler } from "../models/http-handler";

export const deletetMapping = new Map<string, {constructorFun: Function, handler: HttpHandler}>();

export function Delete(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        deletetMapping.set(url, {
            constructorFun: target.constructor,
            handler: descriptor.value
        });
    }
}
