import { httpServer, Get, ChocoRequest, ChocoResponse } from './index';

class UserController {

    @Get('/test/:ss')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({sccess:"Praveen kumar", method: req.getMethod(), query: req.getQueryParams()})
    }

    @Get('/test/sss/:ss')
    getUsers(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({sccess:"Praveen kuma hanesh", params: req.getParams().getValue('ss')})
    }

}

httpServer.listen(3000, () => {
    console.log('on port 3000');
})

// /test/11/sss
// /test/:ss