/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { chart, View } from '../View';
import { Covid, Country } from '../Api';

class ModelClass {
  constructor() {
    this.select_statistic = document.querySelector('.select-statistic');
    this.countryGraphName = document.querySelector('.statistic-all-h2');
  }

  init() {
    this.countryGraphName.innerHTML = 'World';
    Covid.getSummary().then((data) => {
      View.viewStatisticAll(data.TotalConfirmed, data.TotalDeaths, data.TotalRecovered);
    });
    this.graphResults();
  }

  statisticResult() {
    if (this.countryGraphName.innerText === 'World') {
      Covid.getSummary().then((data) => {
        if (this.select_statistic.value === 'All Time') {
          View.viewStatisticAll(data.TotalConfirmed, data.TotalDeaths, data.TotalRecovered);
        } else if (this.select_statistic.value === 'Last Day') {
          View.viewStatisticAll(data.NewConfirmed, data.NewDeaths, data.NewRecovered);
        } else if (this.select_statistic.value === 'All Time(100t.p)') {
          View.viewStatisticAll((data.TotalConfirmed / 78270).toFixed(5), (data.TotalDeaths / 78270).toFixed(5), (data.TotalRecovered / 78270).toFixed(5));
        } else if (this.select_statistic.value === 'Last Day(100t.p)') {
          View.viewStatisticAll((data.NewConfirmed / 78270).toFixed(5), (data.NewDeaths / 78270).toFixed(5), (data.NewRecovered / 78270).toFixed(5));
        }
      });
    } else {
      Covid.getInfoCountry(this.countryGraphName.textContent).then((data) => {
        Country.getPopulation(this.countryGraphName.textContent).then((population) => {
          if (this.select_statistic.value === 'All Time') {
            View.viewStatisticAll(data[data.length - 1].Confirmed, data[data.length - 1].Deaths, data[data.length - 1].Recovered);
          } else if (this.select_statistic.value === 'Last Day') {
            View.viewStatisticAll(data[data.length - 1].Confirmed - data[data.length - 2].Confirmed, data[data.length - 1].Deaths - data[data.length - 2].Deaths, data[data.length - 1].Recovered - data[data.length - 2].Recovered);
          } else if (this.select_statistic.value === 'All Time(100t.p)') {
            View.viewStatisticAll((data[data.length - 1].Confirmed / population * 10000).toFixed(5), (data[data.length - 1].Deaths / population * 10000).toFixed(5), (data[data.length - 1].Recovered / population * 10000).toFixed(5));
          } else if (this.select_statistic.value === 'Last Day(100t.p)') {
            View.viewStatisticAll(((data[data.length - 1].Confirmed - data[data.length - 2].Confirmed) / population * 10000).toFixed(5), ((data[data.length - 1].Deaths - data[data.length - 2].Deaths) / population * 10000).toFixed(5), ((data[data.length - 1].Recovered - data[data.length - 2].Recovered) / population * 10000).toFixed(7));
          }
        });
      });
    }
  }

  graphResults() {
    if (this.countryGraphName.innerText === 'World') {
      Covid.getStatistic().then((data) => {
        if (this.select_statistic.value === 'All Time') {
          chart(data, data.map((e) => e.TotalConfirmed).sort((a, b) => a - b), 'Confirmed', this.countryGraphName.textContent);
        } else if (this.select_statistic.value === 'Last Day') {
          chart(data, data.map((e) => e.NewConfirmed), 'Confirmed');
        } else if (this.select_statistic.value === 'All Time(100t.p)') {
          chart(data, data.map((e) => (e.TotalConfirmed / 78270).toFixed(5)).sort((a, b) => a - b), 'Confirmed', this.countryGraphName.textContent);
        } else if (this.select_statistic.value === 'Last Day(100t.p)') {
          chart(data, data.map((e) => (e.TotalConfirmed / 78270).toFixed(5)), 'Confirmed', this.countryGraphName.textContent);
        }
      });
    } else {
      Covid.getInfoCountry(this.countryGraphName.innerText).then((data) => {
        const target = document.querySelector('.graph-controller-active');
        if (target.getAttribute('data-graph') === 'confirmed') {
          this.graphConfirmed(data, this.countryGraphName.innerText);
        } else if (target.getAttribute('data-graph') === 'deaths') {
          this.graphDeaths(data, this.countryGraphName.innerText);
        } else if (target.getAttribute('data-graph') === 'recovered') {
          this.graphRecovered(data, this.countryGraphName.innerText);
        }
      });
    }
  }

  graphControllerClick() {
    Covid.getInfoCountry(this.countryGraphName.innerText).then((data) => {
      const target = document.querySelector('.graph-controller-active');
      if (target.getAttribute('data-graph') === 'confirmed') {
        this.graphConfirmed(data, this.countryGraphName.innerText);
      } else if (target.getAttribute('data-graph') === 'deaths') {
        this.graphDeaths(data, this.countryGraphName.innerText);
      } else if (target.getAttribute('data-graph') === 'recovered') {
        this.graphRecovered(data, this.countryGraphName.innerText);
      }
    });
  }

  graphController(elem) {
    const checkBar = document.querySelectorAll('[data-graph]');
    checkBar.forEach((e) => (e.classList.contains('graph-controller-active') ? e.classList.remove('graph-controller-active') : false));
    if (this.countryGraphName.innerText === 'World') {
      Covid.getStatistic().then((data) => {
        elem.target.classList.add('graph-controller-active');
        if (elem.target.getAttribute('data-graph') === 'confirmed') {
          this.graphConfirmedWorld(data);
        } else if (elem.target.getAttribute('data-graph') === 'deaths') {
          this.graphDeathsWorld(data);
        } else if (elem.target.getAttribute('data-graph') === 'recovered') {
          this.graphRecoveredWorld(data);
        }
      });
    } else {
      Covid.getInfoCountry(this.countryGraphName.innerText).then((data) => {
        elem.target.classList.add('graph-controller-active');
        if (elem.target.getAttribute('data-graph') === 'confirmed') {
          this.graphConfirmed(data, this.countryGraphName.innerText);
        } else if (elem.target.getAttribute('data-graph') === 'deaths') {
          this.graphDeaths(data, this.countryGraphName.innerText);
        } else if (elem.target.getAttribute('data-graph') === 'recovered') {
          this.graphRecovered(data, this.countryGraphName.innerText);
        }
      });
    }
  }

  graphConfirmedWorld(data) {
    if (this.select_statistic.value === 'All Time') {
      chart(data, data.map((e) => e.TotalConfirmed).sort((a, b) => a - b), 'Confirmed', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'Last Day') {
      chart(data, data.map((e) => e.NewConfirmed), 'Confirmed', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'All Time(100t.p)') {
      chart(data, data.map((e) => (e.TotalConfirmed / 78270).toFixed(5)).sort((a, b) => a - b), 'Confirmed', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'Last Day(100t.p)') {
      chart(data, data.map((e) => (e.TotalConfirmed / 78270).toFixed(5)), 'Confirmed', this.countryGraphName.textContent);
    }
  }

  graphConfirmed(data, country) {
    Country.getPopulation(country).then((count) => {
      if (this.select_statistic.value === 'All Time') {
        chart(data, data.map((e) => e.Confirmed).sort((a, b) => a - b), 'Confirmed', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'Last Day') {
        chart(data, data.map((e) => e.Confirmed), 'Confirmed', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'All Time(100t.p)') {
        chart(data, data.map((e) => (e.Confirmed / count).toFixed(5)).sort((a, b) => a - b), 'Confirmed', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'Last Day(100t.p)') {
        chart(data, data.map((e) => (e.Confirmed / count).toFixed(5)), 'Confirmed', this.countryGraphName.textContent);
      }
    });
  }

  graphDeathsWorld(data) {
    if (this.select_statistic.value === 'All Time') {
      chart(data, data.map((e) => e.TotalDeaths).sort((a, b) => a - b), 'Deaths', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'Last Day') {
      chart(data, data.map((e) => e.NewDeaths), 'Deaths', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'All Time(100t.p)') {
      chart(data, data.map((e) => (e.TotalDeaths / 78270).toFixed(5)).sort((a, b) => a - b), 'Deaths', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'Last Day(100t.p)') {
      chart(data, data.map((e) => (e.TotalDeaths / 78270).toFixed(5)), 'Deaths', this.countryGraphName.textContent);
    }
  }

  graphDeaths(data, country) {
    Country.getPopulation(country).then((count) => {
      if (this.select_statistic.value === 'All Time') {
        chart(data, data.map((e) => e.Deaths).sort((a, b) => a - b), 'Deaths', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'Last Day') {
        chart(data, data.map((e) => e.Deaths), 'Deaths', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'All Time(100t.p)') {
        chart(data, data.map((e) => (e.Deaths / count).toFixed(5)).sort((a, b) => a - b), 'Deaths', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'Last Day(100t.p)') {
        chart(data, data.map((e) => (e.Deaths / count).toFixed(5)), 'Deaths', this.countryGraphName.textContent);
      }
    });
  }

  graphRecoveredWorld(data) {
    if (this.select_statistic.value === 'All Time') {
      chart(data, data.map((e) => e.TotalRecovered).sort((a, b) => a - b), 'Recovered', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'Last Day') {
      chart(data, data.map((e) => e.NewRecovered), 'Recovered', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'All Time(100t.p)') {
      chart(data, data.map((e) => (e.TotalRecovered / 78270).toFixed(5)).sort((a, b) => a - b), 'Recovered', this.countryGraphName.textContent);
    } else if (this.select_statistic.value === 'Last Day(100t.p)') {
      chart(data, data.map((e) => (e.TotalRecovered / 78270).toFixed(5)), 'Recovered', this.countryGraphName.textContent);
    }
  }

  graphRecovered(data, country) {
    Country.getPopulation(country).then((count) => {
      if (this.select_statistic.value === 'All Time') {
        chart(data, data.map((e) => e.Recovered).sort((a, b) => a - b), 'Recovered', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'Last Day') {
        chart(data, data.map((e) => e.Recovered), 'Recovered', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'All Time(100t.p)') {
        chart(data, data.map((e) => (e.Recovered / count).toFixed(5)).sort((a, b) => a - b), 'Recovered', this.countryGraphName.textContent);
      } else if (this.select_statistic.value === 'Last Day(100t.p)') {
        chart(data, data.map((e) => (e.Recovered / count).toFixed(5)), 'Recovered', this.countryGraphName.textContent);
      }
    });
  }

  creeateGraphCountry(country) {
    this.countryGraphName.innerHTML = country;
  }
}
// 78270
export const Model = new ModelClass();
