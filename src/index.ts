export { Get, Post, Put, Delete, RestController, Provider, Inject, SCOPE } from './http/decorators';
import { resolveDependency } from './http/decorators';
import { httpServer } from './http/server';
export { ChocoRequest, ChocoResponse } from './http/models';
export { ConsoleLogger } from './http/logger';
export { ConfigurationService } from './http/configuration';

export const app = {
    chocoServer: httpServer, 
    resolve: resolveDependency
}