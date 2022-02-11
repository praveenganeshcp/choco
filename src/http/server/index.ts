import { createServer } from 'http';
import { ChocoRequest, ChocoResponse, RequestMethod } from '../models';
import { Params } from '../models/params';
import { findHandler } from './find-handler';

export const httpServer = createServer((req, res) => {
    try {
        let { url, method } = req;
        url = url as string;
        method = method as RequestMethod;
       
        const supportedMethods: string[] = [RequestMethod.GET , RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE];
        if(!supportedMethods.includes(method)) {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: `${method} not supported` }));
            return;
        }

        const result = findHandler(url, method);
        if(result && result.route) {
            let reqBody = '';
            req.on('data', (chunk: Buffer) => {
                reqBody += chunk.toString();
            })
            req.on('close', () => {
                const request = new ChocoRequest(req, JSON.parse(reqBody ? reqBody : '{}'), new Params(result.urlParams));
                const response = new ChocoResponse(res);
                if(result.route) {
                    const requestHandler = result.route.handler;
                    requestHandler(request, response);
                }
                else {
                    res.writeHead(404, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: `Handler not found for ${method} : ${url}`}));
                }
            })
        }
        else {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: `Handler not found for ${method} : ${url}`}));
        }
    }
    catch(err) {
        console.error(err);
        throw err;
    }
})