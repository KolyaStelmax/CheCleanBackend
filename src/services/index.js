import { CasesService } from './cases.service.js';
import { PostgresService } from './postgres.service.js';

export const postgresService = new PostgresService();
export const casesService = new CasesService(postgresService);

export * from './cases.service.js';
export * from './postgres.service.js';
