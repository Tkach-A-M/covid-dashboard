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
  }

  init() {
    this.graphsChange();
    this.controllerGraph();
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
}

export const Controller = new ControllerClass();
