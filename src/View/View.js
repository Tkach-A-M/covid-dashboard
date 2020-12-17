/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import { Covid } from '../Api';

class ViewClass {
  constructor() {
    this.table = document.querySelector('.statistic-table');
    this.statistic_confirmed = document.querySelector('.statistic-confirmed');
    this.statistic_death = document.querySelector('.statistic-death');
    this.statistic_recovered = document.querySelector('.statistic-recovered');
  }

  init() {
    Covid.getSummary().then((data) => {
      this.viewStatisticAll(data.TotalConfirmed, data.TotalDeaths, data.TotalRecovered);
    });
  }

  viewStatisticAll(confirmed, death, recovered) {
    this.statistic_confirmed.innerHTML = confirmed;
    this.statistic_death.innerHTML = death;
    this.statistic_recovered.innerHTML = recovered;
  }
}

export const View = new ViewClass();
