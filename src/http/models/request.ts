import { IncomingMessage } from "http"
import { Params } from "./params";
import { QueryParams } from "./query";

export class ChocoRequest {
    private request: IncomingMessage;
    private queryParams: QueryParams;
    private urlParams: Params;
    
    constructor(request: IncomingMessage, urlParams: Params) {
        this.request = request;
        this.queryParams = this.extractQueryParams();
        this.urlParams = urlParams;
    }

    getParams() {
        return this.urlParams;
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