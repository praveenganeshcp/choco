const diMappings: Map<string, any> = new Map();

export function Provider(constructorFun: any) {
    console.log(`New provider ${constructorFun.name}`);
    diMappings.set(constructorFun.name, new constructorFun());
}

export function Inject(token: Function) {
    console.log(`Resolving dependency ${token.name}`)
    return (target: any, propKey: string) => {
        Object.defineProperty(target, propKey, {
            value: diMappings.get(token.name)
        })
    }
}