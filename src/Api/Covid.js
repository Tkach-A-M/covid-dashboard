/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-return-await */
class CovidClass {
  constructor() {
    this.summary = 'summary';
    this.country = 'country';
    this.countries = 'countries';
    this.world = 'world';
    this.date = new Date();
  }

  async getData(id, country) {
    let str = `https://api.covid19api.com/${id}`;
    if (id === this.country) {
      str += `/${country}`;
    }
    if (id === this.world) {
      str += `?from=2020-03-01T00:00:00Z&to=${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}T00:00:00Z`;
    }
    const result = await fetch(str);

    if (!result.ok) {
      // eslint-disable-next-line no-undef
      throw new Error(`No data was found at ${url}, received ${result.status}`);
    }

    return result.json();
  }

  // получить информацию о смертях/выздоровивших в мире
  async getSummary() {
    return await this.getData(this.summary).then((data) => data.Global);
  }

  // информация для построения граффика для страны:
  // информация о covid в стране с 1 марта по сегодняшний день (по дням)

  async getInfoCountry(country) {
    return await this.getData(this.country, country);
  }

  // информация о странах
  async getCountries() {
    return await this.getData(this.countries);
  }

  // информация о выздоровивших людях за последний день (в стране )
  async getRecoveredLastDay(country) {
    return await this.getInfoCountry(country).then((data) => data[data.length - 1].Recovered - data[data.length - 2].Recovered);
  }

  // информация о умерших людях за последний день (в стране )
  async getDeathsLastDay(country) {
    return await this.getInfoCountry(country).then((data) => data[data.length - 1].Deaths - data[data.length - 2].Deaths);
  }

  // информация о заболевших людях за последний день (в стране )
  async getConfirmedLastDay(country) {
    return await this.getInfoCountry(country).then((data) => data[data.length - 1].Confirmed - data[data.length - 2].Confirmed);
  }

  // получить данные о странах
  async getCountriesData(){
    return await this.getData(this.summary).then((data) => data.Countries);
  }


  // дата последнего обновления
  async getUpdateDate() {
    return await this.getData(this.summary).then((data) => data);
  }

  async getStatistic() {
    return await this.getData(this.world);
  }
  // https://api.covid19api.com/world?from=2020-03-01T00:00:00Z&to=2020-11-16T00:00:00Z
}

export const Covid = new CovidClass();
