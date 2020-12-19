/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-parens */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved

import { Country, Covid } from '../Api';

class StorageClass {
  constructor() {
    this.covidInfo = Covid.getCountries().then((data) => data);
    this.countryInfo = Country.getCountries().then((data) => data);
  }

  init() {
    // eslint-disable-next-line no-console
    this.covidInfo.then(data => data);
  }

  getCountryData(name) {
    const country = this.countryInfo.then((data) => data.find(e => e.name === name));
    const covid = this.covidInfo.then((data) => data.find(e => e.Country === name));
    return {
      country,
      covid,
    };
  }

  reloadData() {
    this.covidInfo = { ...Covid.getCountries().then((data) => data[0]) };
    this.countryInfo = { ...Country.getCountries().then((data) => data) };
  }
}

// eslint-disable-next-line import/prefer-default-export
export const Storage = new StorageClass();
