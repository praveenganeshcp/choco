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
        res.sendJSON({users: req.getMethod(), list: this.userService.fetchUsers()})
    }

    @Put('')
    editUsers(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({user: req.getMethod()})
    }

    @Post('')
    createUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({name: req.getMethod()})
    }

    @Delete('')
    deleteUser(req: ChocoRequest, res: ChocoResponse) {
        res.sendJSON({name: req.getMethod()})
    }

}

httpServer.listen(3000, () => {
    console.log('Server listening on port 3000');
})


/**
 * => (req, res) => (req, res) => (req, res) => (req, res)
 */