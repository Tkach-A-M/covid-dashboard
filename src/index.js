/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Api
import './style.scss';
import { Country, Covid } from './Api';
import { Storage } from './Storage';
import { Model } from './Model';
import { View, chart } from './View';
import { Controller } from './Controller';
// eslint-disable-next-line camelcase

// map
const map = L.map('map').setView([51.5679387815455, -27.68735222765881], 1.5);

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=2R2VDK8cUykY5Z0ninZy', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

window.onload = function () {
  Storage.init();
  View.init();
  Controller.init();
  Model.graphResults();
};
// Covid.getStatistic().then((data) => console.log(data.map((e) => e.NewConfirmed)));
