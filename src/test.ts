import { httpServer, Get, ChocoRequest, ChocoResponse } from './index';

class UserController {

    @Get('/test')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({sccess:"Praveen kumar", method: req.getMethod(), query: req.getQueryParams()})
    }
}

httpServer.listen(3000, () => {
    console.log('on port 3000');
})