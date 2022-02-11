import { Provider, SCOPE } from "../decorators";
import {readFileSync} from 'fs';


interface ConfigValue {
    [index: string]: string
}

@Provider(ConfigurationService.name, SCOPE.SINGLETON)
export class ConfigurationService {

    private values: ConfigValue;

    private readEnvVariables() {
        const envVariables = process.env;
        Object.keys(envVariables).forEach(key => {
            this.values[key] = envVariables[key] as string;
        })
        let contents = readFileSync(`${process.cwd()}/.env`).toString();
        let variables = contents.split('\n');
        variables.forEach(variable => {
            const [key, value] = variable.split('=');
            this.values[key] = value;
        })
    }

    constructor() {
        this.values = {};
        this.readEnvVariables();
    }

    get(key: string): string | undefined {
        return this.values[key]
    }
}