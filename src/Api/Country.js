/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
class CountryClass {
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

  // получить название страны

  // получить насенение по названию страны
  async getPopulation(data) {
    return await this.getData('Country', data).then((data) => data[0].population);
  }

  // получить список всех стран
  async getCountries() {
    return await this.getData('AllCountry');
  }
}

// eslint-disable-next-line import/prefer-default-export
export const Country = new CountryClass();
