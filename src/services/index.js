const { CasesService } = require('./cases.service');
const { PostgresService } = require('./postgres.service');

const postgresService = new PostgresService();
const casesService = new CasesService(postgresService);

module.exports = {
    PostgresService,
    CasesService,
    postgresService,
    casesService,
};
