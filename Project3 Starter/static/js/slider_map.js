// initialize world map title layer
//   Initialize the map
let map = L.map("map").setView([0, 0], 2);

// Add the base OpenStreetMap layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

var circleLayers = L.layerGroup();

d3.csv("./joined_disaster_data.csv", (data) => {
  console.log(data);
  // Set a variable for the column names
  let disaster_type = data.columns;
  //drop duplicate years
  const uniqueYears = [...new Set(data.map((disaster) => disaster.year))];

  // Order the array in ascending order
  const sortedYears = uniqueYears.sort((a, b) => a - b);
  // Initialize noUiSlider for the year slider
  function filterPips(value) {
    if (value % 10 === 0) {
      return 1;
    }
    return -1;
  }
  var slider = document.getElementById("year-slider");
  noUiSlider.create(slider, {
    start: parseInt(sortedYears[0]), // initial range of years
    connect: true,
    range: {
      min: parseInt(sortedYears[0]),
      max: parseInt(sortedYears[sortedYears.length - 1]),
    },
    step: 1,
    pips: { mode: "steps", filter: filterPips },
  });
  // When the slider is moved, update the map based on the selected year range
  slider.noUiSlider.on("update", function (values, handle) {
    onYearChange(parseInt(values[0]));
  });
  // Function to handle changes in the dropdown menu
});

function optionChanged(disasterType) {
  circleLayers.clearLayers();
  d3.csv("./joined_disaster_data.csv", (data) => {
    data
      .filter((disaster) => parseInt(disaster[disasterType]) > 0)
      .forEach((selectedYearDisaster) =>
        processCountryData(selectedYearDisaster)
      );
  });
}

function onYearChange(selectedYear) {
  circleLayers.clearLayers();
  d3.csv("./joined_disaster_data.csv", (data) => {
    data
      .filter((disaster) => disaster.year == selectedYear)
      .forEach((selectedYearDisaster) =>
        processCountryData(selectedYearDisaster)
      );
  });
}
//pop up with country stats
function processCountryData(country_data) {
  L.circle(
    [country_data.latitude, country_data.longitude],
    (radius = getRadius(country_data)),
    styleInfo(country_data)
  )
    .bindPopup(
      `<h1>Stats\</h1> <hr> <h3>Country: ${country_data.country}</h3> <h3>Year: ${country_data.year}</h3> <h3>Lat/Long: ${country_data.latitude}, 
  ${country_data.longitude} </h3> <h3>Deaths per 100,000: ${country_data.total_deaths}`
    )
    .addTo(circleLayers);

  map.addLayer(circleLayers);
  // getColor(country_data)
}
//radius based on death rate
function getRadius(country_data) {
  return country_data.total_deaths * 10000;
}
function styleInfo(country_data, selectedValue) {
  let fillColor, radius;

  return {
    weight: 1,
    opacity: 0.6,
    fillOpacity: 0.25,
    fillColor: "#F70016",
    color: "#F70016",
  };
}
