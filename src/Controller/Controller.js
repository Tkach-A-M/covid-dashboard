/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { Model } from '../Model';

class ControllerClass {
  constructor() {
    this.select_statistic = document.querySelector('.select-statistic');
    this.graph_controller = document.querySelector('.graph-controller');
    this.countryGraphName = document.querySelector('.statistic-all-h2');
    this.search_input = document.querySelector('.search-input');
    this.burgerName = document.querySelector('.burger');
    // this.cases_table_row = document.querySelector('.cases-table_row');
  }

  init() {
    this.graphsChange();
    this.controllerGraph();
    this.searchCountry();
    this.tableCountryClick();
    this.keyboard();
    this.increase();
    this.burger();
  }

  graphsChange() {
    this.select_statistic.addEventListener('change', () => {
      Model.statisticResult();
      Model.graphResults();
    });
  }

  controllerGraph() {
    this.graph_controller.addEventListener('click', (elem) => {
      Model.graphController(elem);
    });
  }

  searchCountry() {
    this.search_input.oninput = function () {
      const val = this.value.toLowerCase().trim();
      const elementsList = document.querySelectorAll('.cases-data_row');
      // console.log(elementsList);
      if (val !== '') {
        elementsList.forEach((element) => {
          if (element.innerText.toLowerCase().search(val) === -1) {
            element.classList.add('hide');
          } else {
            element.classList.remove('hide');
          }
        });
      } else {
        elementsList.forEach((element) => element.classList.remove('hide'));
      }
    };
  }

  tableCountryClick() {
    document.querySelector('.cases-table_data').addEventListener('click', (e) => {
      if (e.target.getAttribute('data-country')) {
        document.querySelector('.statistic-all-h2').innerHTML = `${e.target.getAttribute('data-country')}`;
        Model.statisticResult();
        Model.graphControllerClick();
      }
    });
  }

  keyboard() {
    document.querySelector('.search-input').addEventListener('focus', () => {
      document.querySelector('.keyboard').style.top = 'calc(100vh - 260px)';
    });
    document.querySelector('.search-input').addEventListener('blur', () => {
      document.querySelector('.keyboard').style.top = 'calc(100vh)';
    });
  }

  increase() {
    document.querySelectorAll('.increase-button').forEach((e) => {
      e.addEventListener('click', (event) => {
        document.querySelectorAll('[data-block]');
        event.target.getAttribute('data-increase');
        // eslint-disable-next-line no-shadow
        document.querySelectorAll('[data-block]').forEach((elem) => {
          if (elem.getAttribute('data-block') === event.target.getAttribute('data-increase')) {
            elem.classList.contains('increase') ? elem.classList.remove('increase') : elem.classList.add('increase');
            elem.style.zIndex = '20000000';
          } else {
            elem.style.zIndex = '1';
          }
        });
      });
    });
  }

  burger() {
    this.burgerName.addEventListener('click', () => {
      if (this.burgerName.classList.contains('burger-active')) {
        this.burgerName.style.transform = 'rotate(0deg)';
        this.burgerName.classList.remove('burger-active');
        document.querySelector('.info-right').classList.remove('burger-active-right');
      } else {
        this.burgerName.style.transform = 'rotate(90deg)';
        this.burgerName.classList.add('burger-active');
        document.querySelector('.info-right').classList.add('burger-active-right');
      }
    });
  }
}

export const Controller = new ControllerClass();
