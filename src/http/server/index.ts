import { createServer } from 'http';
import { ChocoRequest, ChocoResponse } from '../models';
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

        const request = new ChocoRequest(req);
        const response = new ChocoResponse(res);

        const routeHandler = findHandler(url, method);
        if(routeHandler) {
            routeHandler(request, response);
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