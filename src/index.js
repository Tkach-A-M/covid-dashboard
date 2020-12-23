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

window.onload = function () {
  Storage.init();
  View.init();
  Controller.init();
  Model.init();
  MyMap.showAllMap();
  Country.getFlag('Yemen').then(data => console.log(data));
  console.log("https://www.countryflags.io/bi/flat/32.png");
  // eslint-disable-next-line no-unused-expressions
};
