import { httpServer, Get } from './index';

class UserController {

    @Get('/test')
    getUser() {
        return {success: true};
    }
}

httpServer.listen(3000, () => {
    console.log('on port 3000');
})