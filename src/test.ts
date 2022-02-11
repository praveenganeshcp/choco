import { app,  ChocoRequest, ChocoResponse, ConfigurationService, ConsoleLogger, Get, Inject, Provider, RestController, SCOPE } from './index';

@Provider(UserService.name, SCOPE.SINGLETON)
export class UserService {

    @Inject(ConfigurationService.name) private config: ConfigurationService;

    fetchUser() {
        return null;
    }
}

@RestController('/users')
export class UserController {

    @Inject(UserService.name) private userService: UserService;
    @Inject(ConsoleLogger.name) private logger: ConsoleLogger;

    constructor() {
        this.logger.setContext(UserController.name);
    }

    @Get('/:id')
    getUser(request: ChocoRequest, response: ChocoResponse) {
        this.logger.info('Fetching user')
        response.sendJSON({user: this.userService.fetchUser()});
    }
}

const config = app.resolve(ConfigurationService.name);
const port = config.get('port') || 3000;

app.chocoServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})