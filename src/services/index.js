const { CasesService } = require('./cases.service');
const { PostgresService } = require('./postgres.service');
const { GeocoderService } = require('./geocoder.service');

const postgresService = new PostgresService();
const geocoderService = new GeocoderService(process.env.LOCATIONIQ_API_KEY, process.env.LOCATIONIQ_API_URL);
const casesService = new CasesService(postgresService, geocoderService);

module.exports = {
  PostgresService,
  CasesService,
  GeocoderService,
  postgresService,
  casesService,
  geocoderService,
};
