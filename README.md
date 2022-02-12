> *NOTE: THIS IS A LEARNING PROJECT AND IT IS NOT PUBLISHED IN NPM*

# choco

### REST API Framework for Typescript

This framework is built from scratch using native node.js modules

Core features : 
1. Dependency Injection
2. HTTP decorators (currently supports POST, GET, PUT, DELETE methods)
3. Handling JSON Response.
4. App Configuration (for reading environment variables from .env file)
5. Console logger (supports error, warning, debug, info levels)

# Usage

## Controller
Register the class controller with @RestController('/pathname') decorator.

```
import { RestController } from './index';

@RestController('/users')
export class UserController {

}

```

## Request Handler
Decorate the request handler method with anyone of the available decorators @Get, @Post, @Put, @Delete . Pathname passed into this decorators will be suffixed with pathname provided in RestController decorator. choco provides ChocoRequest and ChocoResponse objects to read request details and write JSON response.

```
import { RestController, ChocoRequest, ChocoResponse, Get } from './index';

@RestController('/users')
export class UserController {
    
    @Get('/:id')
    getUser(request: ChocoRequest, response: ChocoResponse) {
        response.sendJSON({user: null})
    }
}
```
## Services
Services contains the actual logic for processing the request. Decorating the service class with @Provider enables Dependency injection module to inject 
service class instances to the requested controllers. Here a singleton UserService instance is registered for 'UserService' token.

```
import { Provider, SCOPE } from './index';

@Provider(UserService.name, SCOPE.SINGLETON)
export class UserService {
     fetchUser() {
        return null;
    }
}

```

## Configuration
choco provides ConfigurationService class that reads environment variables from .env file. It provides get(key) method that takes a variable name and returns the value. @Inject decorator on class property enables dependency injection to inject this singleton service instance.

```
import { Provider, SCOPE, Inject, ConfigurationService } from './index';

@Provider(UserService.name, SCOPE.SINGLETON)
export class UserService {

    @Inject(ConfigurationService.name) private config: ConfigurationService;
    
    fetchUser() {
        return null;
    }
}

```


## Sample code
```
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
```
