import { IncomingMessage } from "http"
import { Params } from "./params";
import { QueryParams } from "./query";

export class ChocoRequest {
    private request: IncomingMessage;
    private queryParams: QueryParams;
    private urlParams: Params;
    private body: any;
    
    constructor(request: IncomingMessage, body: any, urlParams: Params) {
        this.request = request;
        this.queryParams = this.extractQueryParams();
        this.body = body;
        this.urlParams = urlParams;
    }

    getHeader(name: string) {
        return this.request.headers[name];
    }

    getParams() {
        return this.urlParams;
    }

    getBody() {
        return this.body;
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