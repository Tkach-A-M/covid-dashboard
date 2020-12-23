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
    this.search_input = document.querySelector('#search-input');
    this.keyboard();
    // this.cases_table_row = document.querySelector('.cases-table_row');
  }

  init() {
    this.graphsChange();
    this.controllerGraph();
    this.searchCountry();
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

  clickLeftTable() {
    table.addEventListener('click', (country) => {
      const checkBar = document.querySelectorAll('[data-graph]');
      let target = 0;
      checkBar.forEach((e) => (e.classList.contains('graph-controller-active') ? target = e : e));
      this.countryGraphName.innerText = country;
      Model.statisticResult();
      Model.graphControllerClick(target[0]);
    });
  }

  searchCountry() {
    // this.search_input.onchange = function () {
      this.search_input.addEventListener('change', () => console.log('type'));
    // console.log('type');
      // const val = this.value.toLowerCase().trim();
      // const elementsList = document.querySelectorAll('.cases-data_row');
      // console.log(elementsList);
      // if (val !== '') {
      //   elementsList.forEach((element) => {
      //     if (element.innerText.toLowerCase().search(val) === -1) {
      //       element.classList.add('hide');
      //     } else {
      //       element.classList.remove('hide');
      //     }
      //   });
      // } else {
      //   elementsList.forEach((element) => element.classList.remove('hide'));
      // }
    // };
  }

  keyboard() {
    document.querySelector('.search-input').addEventListener('focus', () => {
      document.querySelector('.keyboard').style.top = 'calc(100vh - 260px)';
    });
    document.querySelector('.search-input').addEventListener('blur', () => {
      document.querySelector('.keyboard').style.top = 'calc(100vh)';
    });
  }
}

export const Controller = new ControllerClass();
