import { HttpHandler } from "../models/http-handler";

export const getMapping = new Map<string, {constructorFun: Function, handler: HttpHandler}>();

export function Get(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        getMapping.set(url, {
            constructorFun: target.constructor,
            handler: descriptor.value
        });
    }
}