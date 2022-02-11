import { chocoServer, Get, Post, ChocoRequest, ChocoResponse, Delete, Put, RestController, Provider, Inject, ConsoleLogger, SCOPE } from './index';

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

    constructor() {
        this.logger.setContext(UserController.name)
    }

    @Get('')
    getUser(req: ChocoRequest, res: ChocoResponse) {
        this.logger.info('fetching user')
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

@RestController('/projects')
class ProjectController {

    @Inject(ConsoleLogger.name) private logger: ConsoleLogger;

    constructor() {
        this.logger.setContext(ProjectController.name);
    }

    @Get('')
    fetchProjects(req: ChocoRequest, res: ChocoResponse) {
        this.logger.info('fetching projects')
        res.sendJSON({projects: []})
    }
}

chocoServer.listen(3000, () => {
    console.log('Server listening on port 3000');
})


/**
 * => (req, res) => (req, res) => (req, res) => (req, res)
 */