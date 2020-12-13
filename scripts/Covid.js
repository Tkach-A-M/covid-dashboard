class CovidClass {
  constructor() {
    this.summary = 'summary';
    this.country = 'country';
    this.countries = 'countries';
  }

  async getData(id, country) {
    let str = `https://api.covid19api.com/${id}`;
    if (id === this.country) {
      str += `/${country}`;
    }

    const result = await fetch(str);

    if (!result.ok) {
      throw new Error(`No data was found at ${url}, received ${result.status}`);
    }

    return await result.json();
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
  async getActiveLastDay(country) {
    return await this.getInfoCountry(country).then((data) => data[data.length - 1].Active - data[data.length - 2].Active);
  }
}
