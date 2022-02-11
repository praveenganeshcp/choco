import { app, Get, Post, ChocoRequest, ChocoResponse, Delete, Put, RestController, Provider, Inject, ConsoleLogger, SCOPE, ConfigurationService } from './index';

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
        res.sendJSON({method: req.getMethod(), value: this.config.get('test')})
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

const config = app.resolve(ConfigurationService.name);
const port = config.get('port') || 3000;

app.chocoServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


/**
 * => (req, res) => (req, res) => (req, res) => (req, res)
 */