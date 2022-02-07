import { HttpHandler } from "../models/http-handler";

export const deleteMapping = new Map<string, {constructorFun: Function, handler: HttpHandler}>();

export function Delete(url: string) {
    return (target: Object, propKey: string, descriptor: PropertyDescriptor) => {
        deleteMapping.set(url, {
            constructorFun: target.constructor,
            handler: descriptor.value
        });
    }
}
