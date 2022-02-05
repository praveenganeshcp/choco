import { getMapping, postMapping, putMapping, deletetMapping } from "../decorators";

export function findHandler(url: string, method: string) {
    const path = url.includes('?') ? url.split('?')[0] : url;
    if(method === 'GET') {
       return getMapping.get(path as string);
    }
    else if(method === 'POST') {
        return postMapping.get(path as string);
    }
    else if(method === 'PUT') {
        return putMapping.get(path as string);
    }
    else if(method === 'DELETE') {
        return deletetMapping.get(path as string);
    }   
}