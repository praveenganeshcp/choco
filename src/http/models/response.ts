import { ServerResponse } from "http";

export class ChocoResponse {

    private response: ServerResponse;
    constructor(response: ServerResponse) {
        this.response = response;
    }

    sendJSON(response: Object, status: number=200) {
        this.response.write(JSON.stringify(response));
        this.response.end();
    }

}