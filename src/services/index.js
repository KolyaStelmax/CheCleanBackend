import { CasesService } from './cases.service.js';
import { PostgresService } from './postgres.service.js';

const postgresService = new PostgresService();
const casesService = new CasesService(postgresService);

export * from './cases.service.js';
export * from './postgres.service.js';
