var map = L.map('danceMap').setView({lat: -31.93409949029348, lng: 115.85100173950197}, 13);

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
