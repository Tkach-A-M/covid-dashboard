/* eslint-disable no-dupe-class-members */
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { Model } from '../Model';

class ControllerClass {
  constructor() {
    this.select_statistic = document.querySelector('.select-statistic');
    this.select_for_table = document.querySelector('.select-for-table');
    this.graph_controller = document.querySelector('.graph-controller');
    this.countryGraphName = document.querySelector('.statistic-all-h2');
    this.search_input = document.querySelector('#search-input');
    this.burgerName = document.querySelector('.burger');
    this.keyboard();
    this.tableCountryClick();
    this.changeLeftSelection();
    // this.cases_table_row = document.querySelector('.cases-table_row');
  }

  init() {
    this.graphsChange();
    this.controllerGraph();
    this.searchCountry();
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
    this.search_input.addEventListener('change', () => console.log('type'));
  }

  keyboard() {
    document.querySelector('.search-input').addEventListener('focus', () => {
      document.querySelector('.keyboard').style.top = 'calc(100vh - 260px)';
    });
    document.querySelector('.search-input').addEventListener('blur', () => {
      document.querySelector('.keyboard').style.top = 'calc(100vh)';
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

  tableCountryClick() {
    document.querySelector('.cases-table_data').addEventListener('click', (e) => {
      if (e.target.getAttribute('data-country')) {
        document.querySelector('.statistic-all-h2').innerHTML = `${e.target.getAttribute('data-country')}`;
        Model.statisticResult();
        Model.graphControllerClick();
      }
    });
  }

  changeLeftSelection() {
    this.select_for_table.addEventListener('change', () => {
      document.querySelectorAll('[data-graph]').forEach((e) => (e.classList.contains('graph-controller-active') ? e.classList.remove('graph-controller-active') : false));
      Model.changeLeftSelect();
      Model.statisticResult();
      Model.graphResults();
    });
  }
}

export const Controller = new ControllerClass();
