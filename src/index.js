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
import { MyMap } from './View/Map';
import { Controller } from './Controller';
// eslint-disable-next-line camelcase

// map
// const map = L.map('map').setView([51.5679387815455, -27.68735222765881], 1.5);

// L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=2R2VDK8cUykY5Z0ninZy', {
//   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
// }).addTo(map);

let tabCovidArray = [];
Covid.getCountriesData().then((data) => tabCovidArray = data);

let a = setTimeout(() => {
  let tabCountriesArray = [];
  Country.getCountries().then((data) => tabCountriesArray = data.flag); 
  return tabCountriesArray;  
}, 2000);




window.onload = function () {
  Storage.init();
  View.init();
  Controller.init();
  Model.init();
  MyMap.showAllMap();
  console.log(tabCovidArray);
  console.log(a);
  console.log(Country.getFlag('Yemen'));
};