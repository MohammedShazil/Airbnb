mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL 
  center: coordinates, // starting position Ilng, lat]
  zoom: 9, // starting zoom
});



if (coordinates && coordinates.length === 2) {
    const marker = new mapboxgl.Marker({color: "red"})
      .setLngLat(coordinates)
      .addTo(map);
  } else {
    console.error("Coordinates are missing or invalid:", coordinates);
  }  