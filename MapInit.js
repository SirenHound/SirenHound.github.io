var map = L.map('mapId').setView({lat: -31.93409949029348, lng: 115.85100173950197}, 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
    //alert("L");
    var latLng = L.latLng(position.coords.latitude, position.coords.longitude);
    //alert("latlng: "+ latLng.toString());
    L.circleMarker(latLng, {}).addTo(map);
    map.panTo(latLng);
  });
} else {
  /* geolocation IS NOT available */
  alert("No Location");
}
imgOv = L.imageOverlay("http://farm8.staticflickr.com/7292/10134658063_fca4fc3da2_o.jpg",
L.latLngBounds(L.latLng({
    "lat": -58.39999999999999,
    "lng": -202.42
  }), L.latLng({
    "lat": 70.40000000000003,
    "lng": 247.08000000000018
  })), {opacity:0.5}).addTo(map)
