// Api
const CountryInfo = new CountryClass();
const CovidInfo = new CovidClass();
// map
const map = L.map('map').setView([51.5679387815455, -27.68735222765881], 1.5);

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=2R2VDK8cUykY5Z0ninZy', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
// test Api
CountryInfo.getPopulation('Belarus').then((data) => {
  //  console.log(data)
});
CovidInfo.getSummary().then((data) => console.log(data));
CountryInfo.getCountries().then((data) => console.log(data));
