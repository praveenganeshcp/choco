import { ChocoRequest } from './request';
import { ChocoResponse } from './response';

export interface HttpHandler {
    (request: ChocoRequest, response: ChocoResponse): void;
}