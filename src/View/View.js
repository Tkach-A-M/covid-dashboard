/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import { doc } from 'prettier';
import { Covid, Country } from '../Api';

class ViewClass {
  constructor() {
    this.header = document.querySelector('.header');
    this.table = document.querySelector('.statistic-table');
    this.statistic_confirmed = document.querySelector('.statistic-confirmed');
    this.statistic_death = document.querySelector('.statistic-death');
    this.statistic_recovered = document.querySelector('.statistic-recovered');
    this.total_cases = document.querySelector('.total-cases_count');
    this.last_update_date = document.querySelector('.last-update-date');
    this.cases_table_data = document.querySelector('.cases-table_data');
    // this.cases_table_row = document.querySelector('.cases-table_row');
    // this.cases_table_list = document.querySelector('.table-cases-list');
    // this.country_name = document.querySelector('.country-name');
    // this.country_flag_image = document.querySelector('.country-flag-image');
    // this.country_cases = document.querySelector('.country-cases');
  }

  init() {
    Covid.getSummary().then((data) => {
      this.viewTotalCases(data.TotalConfirmed);
    });
    // Covid.getUpdateDate().then((data) => this.viewLastUpdateDate(data.Countries));
    Covid.getUpdateDate().then((data) => this.viewLastUpdateDate(data.Date));
    Covid.getCountriesData().then((data) => this.viewTableData(data));
    Covid.getCountriesData().then((data) => console.log(data));
  }

  viewStatisticAll(confirmed, death, recovered) {
    this.statistic_confirmed.innerHTML = confirmed;
    this.statistic_death.innerHTML = death;
    this.statistic_recovered.innerHTML = recovered;
  }

  viewTotalCases(confirmed) {
    this.total_cases.innerHTML = confirmed;
  }

  viewTableData(data) {
  data.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    for (let i = 0; i < data.length; i++) {
      const cases_table_row = document.createElement('div');
      cases_table_row.classList.add('cases-table_row');

      const country_flag = document.createElement('div');
      country_flag.classList.add('country-flag');

      const country_flag_image = document.createElement('img');
      country_flag_image.classList.add('country-flag-image');
      country_flag_image.src = `https://www.countryflags.io/${data[i].CountryCode.toLowerCase()}/flat/32.png`;      
      
      country_flag.appendChild(country_flag_image);

      cases_table_row.innerText = `${data[i].Country} ${data[i].TotalConfirmed}`;
      cases_table_row.prepend(country_flag);

      this.cases_table_data.appendChild(cases_table_row);
    }
  }

  viewLastUpdateDate(date) {
    this.last_update_date.innerHTML = date.slice(0, 10).split('-').reverse().join('.');
  }

  // testView(){
  //   this.country_name.innerText = date.length;
  // }
}

export const View = new ViewClass();
