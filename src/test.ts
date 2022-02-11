import { chocoServer, Get, Post, ChocoRequest, ChocoResponse, Delete, Put, RestController, Provider, Inject, ConsoleLogger, SCOPE, ConfigurationService } from './index';

@Provider(UserService.name, SCOPE.SINGLETON)
class UserService {
    fetchUsers() {
        return []
    }
}

@RestController('/users')
export class UserController {

    @Inject(ConsoleLogger.name) private logger: ConsoleLogger;
    @Inject(UserService.name) private userService: UserService;
    @Inject(ConfigurationService.name) private config: ConfigurationService;

    constructor() {
        this.logger.setContext(UserController.name)
    }

    @Get('')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        this.logger.info('fetching user')
        res.sendJSON({method: req.getMethod(), list: this.userService.fetchUsers()});
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


/**
 * => (req, res) => (req, res) => (req, res) => (req, res)
 */