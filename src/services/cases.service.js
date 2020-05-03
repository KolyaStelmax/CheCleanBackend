export class CasesService {
  constructor(postgresService) {
    this.postgresService = postgresService;
  }

  async getCases(searchParams) {
    const casesRespose = await this.postgresService.pool.query('SELECT * FROM cases ORDER BY id ASC');
    return casesRespose.rows;
    return Promise.resolve([]);
  }

  getCaseById(id) {
    return Promise.resolve({});
  }

  createCase(newCase) {
    return Promise.resolve({});
  }

  resolveCase(id) {
    return Promise.resolve(id);
  }

  unresolveCase(id) {
    return Promise.resolve(id);
  }
}
