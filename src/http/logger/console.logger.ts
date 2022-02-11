import { Provider, SCOPE } from "../decorators";

enum LOG_LEVEL {
    INFO = 'INFO',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG',
    WARNING = 'WARNING'
}

@Provider(ConsoleLogger.name, SCOPE.NEW)
export class ConsoleLogger {

    private context: string;

    private log(level: LOG_LEVEL, message: string) {
        const currentTimeStamp = new Date();
        const timeStamp = `${currentTimeStamp.getDate()}-${currentTimeStamp.getMonth()}-${currentTimeStamp.getFullYear()} ${currentTimeStamp.getHours()}:${currentTimeStamp.getMinutes()}:${currentTimeStamp.getSeconds()}`;
        console.log(`[${timeStamp}] ${this.context} ${level} : ${message}`);
    }

    setContext(context: string) {
        this.context = context;
    }

    error(message: string) {
        this.log(LOG_LEVEL.ERROR, message);
    }

    info(message: string) {
        this.log(LOG_LEVEL.INFO, message);
    }

    debug(message: string) {
        this.log(LOG_LEVEL.DEBUG, message);
    }

    warning(message: string) {
        this.log(LOG_LEVEL.WARNING, message);
    }
}