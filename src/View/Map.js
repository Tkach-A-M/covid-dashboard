/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable space-before-blocks */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-parens */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved

import { Country, Covid } from '../Api';

class MapClass {
  constructor() {
    this.covidInfo = Covid.getCountries().then((data) => data);
    this.countryInfo = Country.getCountries().then((data) => data);
  }

  init() {
    // eslint-disable-next-line no-console
    console.log('this is map');
  }

  showAllMap(){
    const map = L.map('map').setView([21.5679387815455, -22.68735222765881], 2);
    const tileUrl = 'https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=2R2VDK8cUykY5Z0ninZy';
    const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

    L.tileLayer(tileUrl, { attribution }).addTo(map);

    function countriesStyle(feature){
      return {
        fillColor: 'transparent',
        weight: 2,
        opacity: 1,
        color: 'red',
        fillOpacity: 0.7,
      };
    }

    function getCountryColor(popEst){
      return popEst > 1000001 ? '#800027' : popEst > 500001 ? '#BD0027' : popEst > 400001 ? '#E31A1D' :
      popEst > 250001 ? '#FC4E2B' :
      popEst > 100001 ? '#FD8D3D' :
      popEst > 50001 ? '#FEB24D' :
      popEst > 20001 ? '#FED977' :
      popEst > 10001 ? '#FFEDA1' :
      popEst > 3001 ? '#FFC54E' :
      popEst > 1001 ? '#FFE7B5' :
      '#FAE9D8';
    }

    const countryLayers = L.geoJson(
      countries,
      { style: countriesStyle },
    ).addTo(map);

    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function (map){
      let div = L.DomUtil.create('div', 'legend');
      const lables = [
        '1000001 – 5000000',
        '500001 – 1000000',
        '400001 – 500000',
        '250001 – 400001',
        '100001 – 250000',
        '50001 – 100000',
        '20001 – 50000',
        '3001 – 20000',
        '1001 – 3000',
        '1 – 1000'
      ];
      const grades = [1000002, 500002, 400002, 250002, 100002, 50002, 20002, 3002, 1002, 2];
      div.innerHTML = '<div><b>Legend</b></div>';
      for (let i = 0; i < grades.length; i++){
        div.innerHTML += `<i style='background:${getCountryColor(grades[i])}'>&nbsp;&nbsp;</i>
        &nbsp;&nbsp;${lables[i]}</br>`;
      }
      return div;
    };
    legend.addTo(map);
  }

  showCountry() {
    map = L.map('map')
      .remove()
      .setView([Country.getLatitudeNLongitude()], 10);

    L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=2R2VDK8cUykY5Z0ninZy', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const MyMap = new MapClass();
