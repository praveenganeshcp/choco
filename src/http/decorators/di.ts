const diMappings: Map<string, any> = new Map();

export function Provider(token: string) {
    return (constructorFun: any) => {
        console.log(`New provider ${constructorFun.name}`);
        diMappings.set(token, new constructorFun());
    }    
}
export function Inject(token: string) {
    if(! diMappings.has(token)) {
        throw new Error(`No provider registered for the token ${token}`);
    }
    console.log(`Resolving dependency ${token}`);
    return (target: any, propKey: string) => {
        Object.defineProperty(target, propKey, {
            value: diMappings.get(token)
        })
    }
}