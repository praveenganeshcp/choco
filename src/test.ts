import { httpServer, Get, ChocoRequest, ChocoResponse } from './index';

class UserController {

    @Get('/users')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({users: []})
    }

    @Get('/users/:id')
    getUsers(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({user: null, params: req.getParams().getValue('id')})
    }

}

httpServer.listen(3000, () => {
    console.log('Server listening on port 3000');
})


/**
 * => (req, res) => (req, res) => (req, res) => (req, res)
 */