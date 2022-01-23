import { createServer } from 'http';
import { postMapping, getMapping, putMapping, deletetMapping, Get, Post, Put, Delete } from './http/decorators';

const httpServer = createServer((req, res) => {
    try {
        const { url, method } = req;
        res.setHeader('Content-Type', 'application/json');
        const handlerNotFound = { message: `Handler not found for ${method} : ${url}` };
        const methodNotSupported = { message: `${method} not supported` };
        if(method === 'GET') {
            const handler = getMapping.get(url as string);
            if(handler) {
                const response = handler(req, res);
                res.write(JSON.stringify(response));
                res.end();
            }
            else {
                res.write(JSON.stringify(handlerNotFound));
                res.end();
            }
        }
        else if(method === 'POST') {
            const handler = postMapping.get(url as string);
            if(handler) {
                const response = handler(req, res);
                res.write(JSON.stringify(response));
                res.end();
            }
            else {
                res.write(JSON.stringify(handlerNotFound));
                res.end();
            }
        }
        else if(method === 'PUT') {
            const handler = putMapping.get(url as string);
            if(handler) {
                const response = handler(req, res);
                res.write(JSON.stringify(response));
                res.end();
            }
            else {
                res.write(JSON.stringify(handlerNotFound));
                res.end();
            }
        }
        else if(method === 'DELETE') {
            const handler = deletetMapping.get(url as string);
            if(handler) {
                const response = handler(req, res);
                res.write(JSON.stringify(response));
                res.end();
            }
            else {
                res.write(JSON.stringify(handlerNotFound));
                res.end();
            }
        }
        else {
            res.write(JSON.stringify(methodNotSupported));
            res.end();
        }
        
    }
    catch(err) {
        console.error(err);
        throw err;
    }
})

export {
    Post, Put, Get, Delete, httpServer
}