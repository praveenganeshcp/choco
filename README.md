> *NOTE: THIS IS A LEARNING PROJECT AND IT IS NOT PUBLISHED IN NPM*

# choco

## REST API Framework for Typescript and Javascript

This framework is built from scratch using native node.js modules

<br/>

> A simple HTTP controller written using choco

```
import { httpServer, Get, Post, ChocoRequest, ChocoResponse, Delete, Put, RestController, Provider, Inject } from './index';

@Provider
class UserService {
    fetchUsers() {
        return []
    }
}

@RestController('/users')
export class UserController {

    @Inject(UserService) private userService: UserService;

    @Get('')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({method: req.getMethod(), list: this.userService.fetchUsers()})
    }

    @Put('')
    editUsers(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({method: req.getMethod()})
    }

    @Post('')
    createUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({method: req.getMethod()})
    }

    @Delete('')
    deleteUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({method: req.getMethod()})
    }

}

httpServer.listen(3000, () => {
    console.log('Server listening on port 3000');
})


```
