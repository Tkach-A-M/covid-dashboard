/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Covid } from '../Api/Covid';

export function chart(data, arr, lab) {
  document.querySelector('.canvas-graphs').innerHTML = '';
  document.querySelector('.canvas-graphs').innerHTML = '<canvas class="statistic-graphs"></canvas>';
  const ctx = document.querySelector('.statistic-graphs').getContext('2d');
  return new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: Array(data.length).fill(0, 0).map((e, i) => e = `${new Date(2020, 3, 13 + i).getDate()}-${new Date(2020, 3, 13 + i).getMonth() + 1}-${new Date(2020, 3, 13 + i).getFullYear()}`),
      datasets: [{
        pointRadius: 0,
        label: lab,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: '#cc2c10',
        data: arr,
      }],
    },

    // Configuration options go here
    options: {},
  });
}
Chart.defaults.global.defaultFontSize = 10;
