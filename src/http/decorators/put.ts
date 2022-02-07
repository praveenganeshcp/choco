import { HttpHandler } from "../models/http-handler";

export const putMapping = new Map<string, {constructorFun: Function, handler: HttpHandler}>();

export function Put(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        putMapping.set(url, {
            constructorFun: target.constructor,
            handler: descriptor.value
        });
    }
}