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
      } else if (this.select_statistic.value === 'Last Day') {
        chart(data, data.map((e) => e.NewConfirmed), 'Confirmed');
      } else if (this.select_statistic.value === 'All Time(100t.p)') {
        chart(data, data.map((e) => (e.TotalConfirmed / 78270).toFixed(7)).sort((a, b) => a - b), 'Confirmed');
      } else if (this.select_statistic.value === 'Last Day(100t.p)') {
        chart(data, data.map((e) => (e.TotalConfirmed / 78270).toFixed(7)), 'Confirmed');
      }
    });
  }

  graphController(elem, people) {
    const checkBar = document.querySelectorAll('[data-graph]');
    Covid.getStatistic().then((data) => {
      checkBar.forEach((e) => (e.classList.contains('graph-controller-active') ? e.classList.remove('graph-controller-active') : false));
      elem.target.classList.add('graph-controller-active');
      if (elem.target.getAttribute('data-graph') === 'confirmed') {
        this.graphConfirmed(data, people);
      } else if (elem.target.getAttribute('data-graph') === 'deaths') {
        this.graphDeaths(data, people);
      } else if (elem.target.getAttribute('data-graph') === 'recovered') {
        this.graphRecovered(data, people);
      }
    });
  }

  graphConfirmed(data, people) {
    if (this.select_statistic.value === 'All Time') {
      chart(data, data.map((e) => e.TotalConfirmed).sort((a, b) => a - b), 'Confirmed');
    } else if (this.select_statistic.value === 'Last Day') {
      chart(data, data.map((e) => e.NewConfirmed), 'Confirmed');
    } else if (this.select_statistic.value === 'All Time(100t.p)') {
      chart(data, data.map((e) => (e.TotalConfirmed / people).toFixed(7)).sort((a, b) => a - b), 'Confirmed');
    } else if (this.select_statistic.value === 'Last Day(100t.p)') {
      chart(data, data.map((e) => (e.TotalConfirmed / people).toFixed(7)), 'Confirmed');
    }
  }

  graphDeaths(data, people) {
    if (this.select_statistic.value === 'All Time') {
      chart(data, data.map((e) => e.TotalDeaths).sort((a, b) => a - b), 'Deaths');
    } else if (this.select_statistic.value === 'Last Day') {
      chart(data, data.map((e) => e.NewDeaths), 'Deaths');
    } else if (this.select_statistic.value === 'All Time(100t.p)') {
      chart(data, data.map((e) => (e.TotalDeaths / people).toFixed(7)).sort((a, b) => a - b), 'Deaths');
    } else if (this.select_statistic.value === 'Last Day(100t.p)') {
      chart(data, data.map((e) => (e.TotalDeaths / people).toFixed(7)), 'Deaths');
    }
  }

  graphRecovered(data, people) {
    if (this.select_statistic.value === 'All Time') {
      chart(data, data.map((e) => e.TotalRecovered).sort((a, b) => a - b), 'Recovered');
    } else if (this.select_statistic.value === 'Last Day') {
      chart(data, data.map((e) => e.NewRecovered), 'Recovered');
    } else if (this.select_statistic.value === 'All Time(100t.p)') {
      chart(data, data.map((e) => (e.TotalRecovered / people).toFixed(7)).sort((a, b) => a - b), 'Recovered');
    } else if (this.select_statistic.value === 'Last Day(100t.p)') {
      chart(data, data.map((e) => (e.TotalRecovered / people).toFixed(7)), 'Recovered');
    }
  }
}
// 78270
export const Model = new ModelClass();
