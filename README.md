> *NOTE: THIS IS A LEARNING PROJECT AND IT IS NOT PUBLISHED IN NPM*

# choco

## REST API Framework for Typescript and Javascript

This framework is built from scratch using native node.js modules

<br/>

> A simple HTTP controller written using choco

```
import { httpServer, Get, ChocoRequest, ChocoResponse } from './index';

class UserController {

    @Get('/users')
    getUsers(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({users: []})
    }

    @Get('/users/:id')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({user: null, userId: req.getParams().getValue('id')})
    }
    
    @Post('/users')
    createUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON(req.getBody())
    }

}


httpServer.listen(3000, () => {
    console.log('Server listening on port 3000');
})

```
