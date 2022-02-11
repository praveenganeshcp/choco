import { Provider } from "../decorators";

enum LOG_LEVEL {
    INFO = 'INFO',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG',
    WARNING = 'WARNING'
}

@Provider(ConsoleLogger.name)
export class ConsoleLogger {

    private context: string;

    private log(level: LOG_LEVEL, message: string) {
        console.log(`${new Date().toString()} ${this.context} ${level} : ${message}`)
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
}