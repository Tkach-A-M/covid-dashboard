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
      return{
        fillColor: getCountryColor(feature.properties.pop_est),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: 3,
        fillOpacity: 0.7,
      };
    }

    function getCountryColor(popEst){
      if (popEst > 100000000){
        return 'red';
      } else if (popEst > 50000000) {
        return 'blue';
      } else {
        return 'green';
      }
    }

    const countryLayers = L.geoJson(
      countries,
      { style: countriesStyle }
    ).addTo(map);

    const legend = L.control({position: 'bottomright'});
    legend.onAdd = function(map){
      let div = L.DomUtil.create('div', 'legend');
      const lables = [
        'Population > 100000000',
        'Population > 50000000',
        'Population < 50000000'
      ]
      const grades = [100000001, 50000001, 50000000];
      div.innerHTML = '<div><b>Legend</b></div>';
      for (let i = 0; i < grades.length; i++){
        div.innerHTML += `<i style='background:${getCountryColor(grades[i])}'>&nbsp;&nbsp;</i>
        &nbsp;&nbsp;${lables[i]}</br>`;
      }
    return div;
    }
    legend.addTo(map);

    function highlight(e){
      let layer = e.target;

      layer.setStyle({
        width: 5,
        color: black,
        fillOpacity: 0.8
      });

      if(!L.Browser.ie && !L.Browser.opera && !L.browser.edge){
        layer.bringToFront();
      }
    }

    function resHighLight(e){
      geojson.resetStyle(e.target);
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
