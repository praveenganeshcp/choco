import { IncomingMessage, ServerResponse } from 'http';

export interface HttpHandler {
    (request: IncomingMessage, response: ServerResponse): any;
}