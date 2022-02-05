import { ServerResponse } from "http";

export class ChocoResponse {

    private httpStatus: number;
    private response: ServerResponse;
    constructor(response: ServerResponse) {
        this.response = response;
        this.httpStatus = 200;
    }

    setStatus(statusCode: number) {
        this.httpStatus = statusCode;
    }

    sendJSON(response: Object, status: number=200) {
        this.response.write(JSON.stringify(response));
        this.response.end();
    }

}