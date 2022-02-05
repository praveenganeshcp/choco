import { PathResolver } from "./path-resolver";

const pathResolver = new PathResolver();

export function findHandler(url: string, method: string) {
    const path = url.includes('?') ? url.split('?')[0] : url;
    if(method === 'GET') {
       return pathResolver.findGetHandler(path);
    }
    else if(method === 'POST') {
        return pathResolver.findPostHandler(path);
    }
    else if(method === 'PUT') {
        return pathResolver.findPutHandler(path);
    }
    else if(method === 'DELETE') {
        return pathResolver.findDeleteHandler(path);
    }   
}