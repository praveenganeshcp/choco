> *NOTE: THIS IS A LEARNING PROJECT AND IT IS NOT PUBLISHED IN NPM*

# choco

## REST API Framework for Typescript and Javascript

This framework is built from scratch using native node.js modules

Core features : 
1. Dependency Injection
2. HTTP decorators (currently supports POST, GET, PUT, DELETE methods)
3. Handling JSON Response.

## Usage
> A simple HTTP controller written using choco

```
import { chocoServer, Get, Post, ChocoRequest, ChocoResponse, Delete, Put, RestController, Provider, Inject } from './index';

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


chocoServer.listen(3000, () => {
    console.log('Server listening on port 3000');
})


```
