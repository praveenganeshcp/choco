import { HttpHandler } from "../models/http-handler";

export const postMapping = new Map<string, {constructorFun: Function, handler: HttpHandler}>();

export function Post(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        postMapping.set(url, {
            constructorFun: target.constructor,
            handler: descriptor.value
        });
    }
}