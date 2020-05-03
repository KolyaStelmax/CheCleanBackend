export class CasesService {
  constructor(postgresService) {
    this.postgresService = postgresService;
  }

  getCases(searchParams) {
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
