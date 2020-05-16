const Queue = require('queue-promise');
const axios = require('axios');

class GeocoderService {
  constructor(apikey, apiUrl) {
    this.API_KEY = apikey;
    this.API_URL = apiUrl;
    this.LIMIT = 1;
    this.FORMAT = 'json';
    this.LANG = 'uk';

    this.queue = new Queue({
      concurrent: 1,
      interval: 1500,
      start: true,
    });
  }

  async reverseGeocoding(latitude, longitude) {
    return new Promise((resolve) => {
      const url = `${this.API_URL}`
        + `?key=${this.API_KEY}`
        + `&format=${this.FORMAT}`
        + `&accept-language=${this.LANG}`
        + `&limit=${this.LIMIT}`
        + `&lat=${latitude}`
        + `&lon=${longitude}`;

      return this.queue.enqueue(async () => {
        const address = (await axios.get(url)).data;
        resolve(address);
      });
    });
  }
}

module.exports = {
  GeocoderService,
};
