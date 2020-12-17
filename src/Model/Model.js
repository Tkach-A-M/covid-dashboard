/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { chart, View } from '../View';
import { Covid } from '../Api';

class ModelClass {
  constructor() {
    this.select_statistic = document.querySelector('.select-statistic');
  }

  statisticResult() {
    Covid.getSummary().then((data) => {
      if (this.select_statistic.value === 'All Time') {
        View.viewStatisticAll(data.TotalConfirmed, data.TotalDeaths, data.TotalRecovered);
      } else if (this.select_statistic.value === 'Last Day') {
        View.viewStatisticAll(data.NewConfirmed, data.NewDeaths, data.NewRecovered);
      } else if (this.select_statistic.value === 'All Time(100t.p)') {
        View.viewStatisticAll((data.TotalConfirmed / 78270).toFixed(7), (data.TotalDeaths / 78270).toFixed(7), (data.TotalRecovered / 78270).toFixed(7));
      } else if (this.select_statistic.value === 'Last Day(100t.p)') {
        View.viewStatisticAll((data.NewConfirmed / 78270).toFixed(8), (data.NewDeaths / 78270).toFixed(8), (data.NewRecovered / 78270).toFixed(8));
      }
    });
  }

  graphResults() {
    Covid.getStatistic().then((data) => {
      if (this.select_statistic.value === 'All Time') {
        chart(data, data.map((e) => e.TotalConfirmed).sort((a, b) => a - b), 'Confirmed');
      } else if (this.select_statistic.value === 'All Time(100t.p)') {
        chart(data, data.map((e) => (e.TotalConfirmed / 78270).toFixed(7)).sort((a, b) => a - b), 'Confirmed');
      }
    });
  }
}

export const Model = new ModelClass();
