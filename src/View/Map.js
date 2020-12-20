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

    L.tileLayer( tileUrl , { attribution }).addTo(map);

    const legend = L.control( {position: 'bottomright'} );
    legend.onAdd = function(map){
      let div = L.DomUtil.create('div', 'legend');
    }

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
