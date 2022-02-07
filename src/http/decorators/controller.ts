import { deletetMapping, getMapping, postMapping, putMapping } from ".";


export function RestController(url: string) {
    return (constrcutorFn: any) => {
        const context = new constrcutorFn();
        const getMethodClassRoutes: string[] = [];
        const postMethodClassRoutes: string[] = []
        const putMethodClassRoutes: string[] = []
        const deleteMethodClassRoutes: string[] = []
        getMapping.forEach((route, key) => {
            if(route.constructorFun == constrcutorFn) {
                getMethodClassRoutes.push(key);
            }
        }) 
        putMapping.forEach((route, key) => {
            if(route.constructorFun == constrcutorFn) {
                putMethodClassRoutes.push(key);
            }
        }) 
        postMapping.forEach((route, key) => {
            if(route.constructorFun == constrcutorFn) {
                postMethodClassRoutes.push(key);
            }
        }) 
        deletetMapping.forEach((route, key) => {
            if(route.constructorFun == constrcutorFn) {
                deleteMethodClassRoutes.push(key);
            }
        }) 
        getMethodClassRoutes.forEach(routeUrl => {
            const route = getMapping.get(routeUrl);
            if(route) {
                getMapping.set(url+routeUrl, {
                    constructorFun: route.constructorFun,
                    handler: route.handler.bind(context),
                })
                getMapping.delete(routeUrl);
            }
        })
        deleteMethodClassRoutes.forEach(routeUrl => {
            const route = deletetMapping.get(routeUrl);
            if(route) {
                deletetMapping.set(url+routeUrl, {
                    constructorFun: route.constructorFun,
                    handler: route.handler.bind(context),
                })
                deletetMapping.delete(routeUrl);
            }
        })
        postMethodClassRoutes.forEach(routeUrl => {
            const route = postMapping.get(routeUrl);
            if(route) {
                postMapping.set(url+routeUrl, {
                    constructorFun: route.constructorFun,
                    handler: route.handler.bind(context),
                })
                postMapping.delete(routeUrl);
            }
        })
        putMethodClassRoutes.forEach(routeUrl => {
            const route = putMapping.get(routeUrl);
            if(route) {
                putMapping.set(url+routeUrl, {
                    constructorFun: route.constructorFun,
                    handler: route.handler.bind(context),
                })
                putMapping.delete(routeUrl);
            }
        })
    }
}