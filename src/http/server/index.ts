import { createServer } from 'http';
import { ChocoRequest, ChocoResponse } from '../models';
import { Params } from '../models/params';
import { findHandler } from './find-handler';

export const httpServer = createServer((req, res) => {
    try {
        let { url, method } = req;
        url = url as string;
        method = method as string;
       
        const supportedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
        if(!supportedMethods.includes(method)) {
            res.setHeader('Content-Type', 'application/json').write(JSON.stringify({ message: `${method} not supported` }));
            res.end();
            return;
        }

        const result = findHandler(url, method);
        if(result && result.handler) {
            let reqBody = '';
            req.on('data', (chunk: Buffer) => {
                reqBody += chunk.toString();
            })
            req.on('close', () => {
                const request = new ChocoRequest(req, JSON.parse(reqBody), new Params(result.urlParams));
                const response = new ChocoResponse(res);
                if(result.handler) {
                    result.handler(request, response);
                }
                else {
                    res.setHeader('Content-Type', 'application/json').write(JSON.stringify({ message: `Handler not found for ${method} : ${url}` }));
                    res.end();
                }
            })
        }
        else {
            res.setHeader('Content-Type', 'application/json').write(JSON.stringify({ message: `Handler not found for ${method} : ${url}` }));
            res.end();
        }
    }
    catch(err) {
        console.error(err);
        throw err;
    }
})