import { ServerResponse } from "http";

export class ChocoResponse {

    private httpStatusCode: number;
    private response: ServerResponse;
    constructor(response: ServerResponse) {
        this.response = response;
        this.httpStatusCode = 200;
    }

    setStatus(statusCode: number) {
        this.httpStatusCode = statusCode;
    }

    removeHeader(name: string) {
        this.response.removeHeader(name);
    }

    setHeader(name: string, value: string | number) {
        this.response.setHeader(name, value);
    }

    sendJSON(response: Object, status: number=200) {
        this.setHeader('Content-Type', 'application/json')
        this.response.writeHead(this.httpStatusCode);
        this.response.end(JSON.stringify(response));
    }

}