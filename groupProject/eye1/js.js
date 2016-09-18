var map;
var chicago = {lat: 41.85, lng: -87.65};

function initMap(aa){
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 40.726806, lng: -74.032179}
  });

  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
  
  // var marker = new google.maps.Marker({
  //   position: {lat: 40.726806, lng: -74.032179},
  //   map: map,
  //   title: 'Hello World!'
  // });
}
function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');

  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  
  controlText.innerHTML = 'Center Map';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    map.setCenter(chicago);
  });

}
function CenterControl1(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');

  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  
  controlText.innerHTML = 'aaaaa';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    map.setCenter(chicago);
  });

}
function myFunction() {
	address={lat: 40.726806, lng: -74.032179};

    return address;
}


// document.getElementById("demo").innerHTML = myFunction();
// function showHTML(){

//  x="map";
// return Math.PI;

//  console.log(x);
// }
// document.getElementById("dem").innerHTML = showHTML();
