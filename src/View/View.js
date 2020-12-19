/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import { Covid } from '../Api';

class ViewClass {
  constructor() {
    this.table = document.querySelector('.statistic-table');
    this.statistic_confirmed = document.querySelector('.statistic-confirmed');
    this.statistic_death = document.querySelector('.statistic-death');
    this.statistic_recovered = document.querySelector('.statistic-recovered');
    this.total_cases = document.querySelector('.total-cases_count');
    this.last_update_date = document.querySelector('.last-update-date');
  }

  init() {
    Covid.getSummary().then((data) => {
      this.viewTotalCases(data.TotalConfirmed);
    });
    Covid.getUpdateDate().then((data) => this.viewLastUpdateDate(data.Date));
  }

  viewStatisticAll(confirmed, death, recovered) {
    this.statistic_confirmed.innerHTML = confirmed;
    this.statistic_death.innerHTML = death;
    this.statistic_recovered.innerHTML = recovered;
  }

  viewTotalCases(confirmed) {
    this.total_cases.innerHTML = confirmed;
  }

  viewLastUpdateDate(date) {
    this.last_update_date.innerHTML = date.slice(0, 10);
  }
}

export const View = new ViewClass();
