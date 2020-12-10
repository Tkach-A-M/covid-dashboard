//map
google.charts.load('current', {
    'packages':['geochart'],
    //!!!!!!!!!!!!!!!!!!!
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    // !!!!!!!!!!!!!!!!!!
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    let data = google.visualization.arrayToDataTable(
        [
        ['Country', 'Popularity', 'Age'],
        ['Germany', 200, 78],
        ['United States', 300, 56],
        ['Brazil', 400, 65],
        ['Canada', 500, 77],
        ['France', 600, 71],
        ['RU', 700, 50]
    ]);

    let options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    document.getElementById('regions_div').style.height = `${(5 / 9) * document.getElementById('regions_div').offsetWidth} px`;
    chart.draw(data, options);
}

window.onload = resize;
window.onresize = resize;

function resize(){
    drawRegionsMap();
}
