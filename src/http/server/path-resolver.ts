import { deletetMapping, getMapping, postMapping, putMapping } from "../decorators";
import { HttpHandler } from "../models";

export class PathResolver {

    private isPathAndURLSameLength(url: string, path: string) {
        return url.split('/').length === path.split('/').length;
    }

    private findMatchingHandler(path: string, mapping: Map<string, HttpHandler>) {
        for(let key of mapping.keys()) {
            if(this.isPathAndURLSameLength(key, path)) {
                const pathSegmentArray = path.split('/');
                const urlSegmentArray = key.split('/');
                const len = pathSegmentArray.length;
                let isPathMatched: boolean = true;
                const urlParams: any = {};
                for(let i=0; i<len; i++) {
                    const pathSegment = pathSegmentArray[i];
                    const urlSegment = urlSegmentArray[i];
                    if(!urlSegment.startsWith(':')) {
                        if(pathSegment !== urlSegment) {
                            isPathMatched = false;
                            break;
                        }
                    }
                    else {
                        urlParams[urlSegment.substring(1)] = pathSegment;
                    }
                }
                if(isPathMatched) {
                    console.log(`${key} pth matched`);
                    return {handler: mapping.get(key), urlParams};
                }
            }
        }
    }

    findGetHandler(path: string) {
        return this.findMatchingHandler(path, getMapping);
    }

    findPostHandler(path: string) {
        return this.findMatchingHandler(path, postMapping);
    }

    findDeleteHandler(path: string) {
        return this.findMatchingHandler(path, deletetMapping);
    }

    findPutHandler(path: string) {
        return this.findMatchingHandler(path, putMapping);
    }
}