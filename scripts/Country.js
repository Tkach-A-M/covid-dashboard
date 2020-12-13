class CountryClass {
  constructor() {
  }

  async getData(category, data) {
    let str = 'https://restcountries.eu/rest/v2';

    if (category === 'AllCountry') {
      str += '/all';
    }
    if (category === 'Country') {
      str += `/name/${data}?fullText=true`;
    }
    const result = await fetch(str);

    if (!result.ok) {
      throw new Error(`No data was found at ${url}, received ${result.status}`);
    }

    return await result.json();
  }

  // получить флаг по названию страны
  async getFlag(data) {
    return await this.getData('Country', data).then((data) => data[0].flag);
  }

  // получить насенение по названию страны
  async getPopulation(data) {
    return await this.getData('Country', data).then((data) => data[0].population);
  }

  // получить список всех стран
  async getCountries() {
    return await this.getData('AllCountry');
  }
}
