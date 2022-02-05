import { ChocoRequest, ChocoResponse } from './http/models';
import { httpServer, Get } from './index';

class UserController {

    @Get('/test')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({sccess:"Praveen", method: req.getMethod()})
    }
}

httpServer.listen(3000, () => {
    console.log('on port 3000');
})