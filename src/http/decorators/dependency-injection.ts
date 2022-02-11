interface DIValue {
    result?: any, 
    new?: any
} 

const dependencyInjectionMappings: Map<string, DIValue> = new Map();

export enum SCOPE { 
    NEW = 'NEW',
    SINGLETON = 'SINGLETON'
}

export function Provider(token: string, scope: SCOPE) {
    return (constructorFun: any) => {
        console.log(`New provider ${constructorFun.name}`);
        const value: DIValue = {}
        if(scope === SCOPE.SINGLETON) {
            value.result = new constructorFun();
        }
        else {
            value.new = constructorFun
        }
        dependencyInjectionMappings.set(token, value);
    }    
}
export function Inject(token: string) {
    if(! dependencyInjectionMappings.has(token)) {
        throw new Error(`No provider registered for the token ${token}`);
    }
    const result = dependencyInjectionMappings.get(token);
    return (target: any, propKey: string) => {
        Object.defineProperty(target, propKey, {
            value: result?.new !== undefined ? new result.new() : result?.result
        })
    }
}