import { IncomingMessage } from "http";
import { URLSearchParams } from 'url';

export function extractQuery(req: IncomingMessage) {
    const url = req.url;
    const query = {};
    const params = new URLSearchParams()
}