export class CasesService {
  constructor(postgresService) {
    this.postgresService = postgresService;
  }

  remapCase({id, details, location, address, image_url, map_image_url, status, created_at}) {
    return {
      id,
      details,
      location:{
        latitude: location.x,
        longtitude: location.y,
        address,
        map_image_url
      },
      image_url,
      status,
      created_at
    }
  }

  async getCases(searchParams) {
    const casesRespose = await this.postgresService.knex('cases').orderBy('id');
    // console.log(casesRespose);
    return casesRespose.map(this.remapCase)
  }

  async getCaseById(id) {
    const idResponse = await this.postgresService.knex('cases').where('id', id);
    return this.remapCase(idResponse[0]);
  }

  async createCase(newCase) {
    const databaseCase = {
      ...newCase
    }
    console.log(databaseCase);
    const createdCase = await this.postgresService.knex('cases').insert(newCase);
    return createdCase[0];
  }

  async resolveCase(id) {
    const resolvedCase = await this.knex('cases').where('id', id).update({status: 1});
    return resolvedCase.rows
  }

  unresolveCase(id) {
    // const resolvedCase = await this.knex('cases').where('id', id).update({status: 0});
    // return resolvedCase.rows
  }
}
