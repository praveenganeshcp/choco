import { IncomingMessage, ServerResponse } from 'http';

interface HttpHandler {
    (request: IncomingMessage, response: ServerResponse): any;
}

export const getMapping = new Map<string, HttpHandler>();
export const postMapping = new Map<string, HttpHandler>();
export const putMapping = new Map<string, HttpHandler>();
export const deletetMapping = new Map<string, HttpHandler>();


export function Get(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        getMapping.set(url, routine);
    }
}

export function Post(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        postMapping.set(url, routine);
    }
}

export function Put(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        putMapping.set(url, routine);
    }
}

export function Delete(url: string) {
    return (...params: any) => {
        const routine = params[2].value;
        deletetMapping.set(url, routine);
    }
}
