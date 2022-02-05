import { getMapping, postMapping, putMapping, deletetMapping } from "../decorators";

export function findHandler(url: string, method: string) {
    if(method === 'GET') {
       return getMapping.get(url as string);
    }
    else if(method === 'POST') {
        return postMapping.get(url as string);
       
    }
    else if(method === 'PUT') {
        return putMapping.get(url as string);
    }
    else if(method === 'DELETE') {
        return deletetMapping.get(url as string);
    }   
}