import { CommonMocks } from '../mocks/common.js';
export class CasesService {
  constructor(postgresService) {
    this.postgresService = postgresService;
    this.DEFAULT_PARAMS = {
      limit: 5,
      offset: 0,
    };
  }

  remapCase({ id, details, location, address, image_url, map_image_url, status, created_at }) {
    return {
      id,
      details,
      location: {
        latitude: location.x,
        longtitude: location.y,
        address,
        map_image_url,
      },
      image_url,
      status,
      created_at,
    };
  }

  async getCases(searchParams) {
    const currentParams = {
      ...this.DEFAULT_PARAMS,
      ...searchParams,
    };
    const casesRespose = await this.postgresService
      .knex('cases')
      .limit(currentParams.limit)
      .offset(currentParams.offset)
      .orderBy('id');

    return casesRespose.map(this.remapCase);
  }

  async getCaseById(id) {
    const idResponse = await this.postgresService.knex('cases').where('id', id);

    return idResponse.map(this.remapCase);
  }

  async createCase(newCase) {
    const databaseCase = {
      ...newCase,
      location: newCase.location.latitude + ', ' + newCase.location.longitude,
      address: '',
      map_image_url: '',
    };

    const createdCase = await this.postgresService
      .knex('cases')
      .insert(databaseCase)
      .returning('*');

    return this.remapCase(createdCase[0]);
  }

  async resolveCase(id) {
    const resolvedCase = await this.postgresService
      .knex('cases')
      .where('id', id)
      .update({ status: 1 })
      .returning('*');

    return this.remapCase(resolvedCase[0]);
  }

  async unresolveCase(id) {
    const unresolvedCase = await this.postgresService
      .knex('cases')
      .where('id', id)
      .update({ status: 0 })
      .returning('*');

    return this.remapCase(unresolvedCase[0]);
  }
}
