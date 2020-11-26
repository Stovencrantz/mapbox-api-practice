mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RvdmVuY3JhbnR6IiwiYSI6ImNraHh0YnZicDAxZTMyeG95M3d1M3g1MmcifQ.rAmHkmqJ0HI2WocSFACwZQ";


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true 
});


function successLocation(position) {
    console.log("position: ", position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(error) {
    console.log("error: ", error);
    setupMap([ -2.24, 53.48])
}

function setupMap(center) {


    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 12
      })

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");
      map.addControl(
          new MapboxDirections({
              accessToken: mapboxgl.accessToken,
          }),
          "top-left"
      )
}



