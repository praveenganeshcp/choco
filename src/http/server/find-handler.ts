import { RequestMethod } from "../models";
import { PathResolver } from "./path-resolver";

const pathResolver = new PathResolver();

export function findHandler(url: string, method: string) {
    const path = url.includes('?') ? url.split('?')[0] : url;
    if(method === RequestMethod.GET) {
       return pathResolver.findGetHandler(path);
    }
    else if(method === RequestMethod.POST) {
        return pathResolver.findPostHandler(path);
    }
    else if(method === RequestMethod.PUT) {
        return pathResolver.findPutHandler(path);
    }
    else if(method === RequestMethod.DELETE) {
        return pathResolver.findDeleteHandler(path);
    }   
}