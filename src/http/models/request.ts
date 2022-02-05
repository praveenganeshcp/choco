import { IncomingMessage } from "http"
import { QueryParams } from "./query";

export class ChocoRequest {
    private request: IncomingMessage;
    private queryParams: QueryParams;
    
    constructor(request: IncomingMessage) {
        this.request = request;
        this.queryParams = this.extractQueryParams();
    }

    getMethod() {
        return this.request.method;
    }

    getQueryParams() {
        return this.queryParams;
    }

    private extractQueryParams() {
        const query: any = {};
        const queryString = this.request.url?.split('?')[1];
        const urlSearchParams = new URLSearchParams(queryString ? queryString : '')
        for(let key of urlSearchParams.keys()) {
            query[key] = urlSearchParams.get(key)
        }
        return new QueryParams(query);
    }

    
}