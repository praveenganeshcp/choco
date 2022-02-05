import { IncomingMessage } from "http"

export class ChocoRequest {
    private request: IncomingMessage;
    constructor(request: IncomingMessage) {
        this.request = request;
    }

    getMethod() {
        return this.request.method;
    }
}