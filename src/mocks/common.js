const { casesMock, newCaseMock } = require('./case.mocks');

class CommonMocks {
  static get newCase() {
    return this.getDeepCopy(newCaseMock);
  }

  static get cases() {
    return this.getDeepCopy(casesMock);
  }

  static getDeepCopy(mock) {
    return JSON.parse(JSON.stringify(mock));
  }
}

module.exports = {
  CommonMocks,
};
