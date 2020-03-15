import API from "../utils/api";
import { SET_LOCATIONS, SET_MAP } from "../constants";
import { MapStyle, google } from "../constants/MapStyle";
import MapMarker from "../assets/img/map-marker.png";

// info popup on click marker
if (process.browser) {
  var infowindow = new google.maps.InfoWindow();
}

export function getLocationsAndSetMap(mapRef) {
  return dispatch =>
    API.get("/locations")
      .then(res => {
        dispatch({
          type: SET_LOCATIONS,
          payload: res.data,
        });
        return res.data;
      })
      .then(points => {
        return setGoogleMap(mapRef, points);
      })
      .then(map => {
        dispatch({
          type: SET_MAP,
          payload: map,
        });
      })
}

export function getLocations() {
  return dispatch =>
    API.get("/locations")
      .then(res => {
        dispatch({
          type: SET_LOCATIONS,
          payload: res.data,
        });
        return res.data;
      })
}

function setGoogleMap(mapRef, points) {
  let styledMapType = new google.maps.StyledMapType(MapStyle, { name: "Styled Map" });
  const map = new google.maps.Map(mapRef, {
    zoom: 13,
    center: { lat: 47.846663, lng: 35.124902 },
    mapTypeControl: false,
  });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
  points.forEach((point, i) => {
    let marker = new google.maps.Marker({
      map: map,
      position: { lat: point.lat, lng: point.lng },
      animation: google.maps.Animation.DROP,
      title: point.name,
      icon: MapMarker,
    });

    const contentString = 
    `<div>
      <h3>${point.pointName}</h3>
      <div>
        <h5>Години роботи:</h5>
        <h6>${point.shopData.workTime}</h6>
      </div>
    </div>`;

    makeInfoWindowEvent(map, infowindow, contentString, marker);

  });
  return map;
}

function makeInfoWindowEvent(map, infowindow, contentString, marker) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
}