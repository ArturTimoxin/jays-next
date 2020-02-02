import API from "../utils/api";
import { MapStyle, google } from "../constants/MapStyle";
import { SET_POINT_DATA, SET_MINI_MAP } from "../constants";
import MarkerIcon from "../assets/img/map-marker.png";

export function getPointData(pointID, mapRef) {
  return dispatch =>
    API.get(`/locations/${pointID}`)
      .then(res => {
        dispatch({
          type: SET_POINT_DATA,
          payload: res.data,
        });
        return res.data;
      })
      .then(pointData => {
        if(mapRef) {
            return setMiniGoogleMap(mapRef, pointData);
        }
        return {};
      })
      .then(map => {
        dispatch({
          type: SET_MINI_MAP,
          payload: map,
        });
      })
}



function setMiniGoogleMap(miniMapRef, pointData) {
  let styledMapType = new google.maps.StyledMapType(MapStyle, { name: "Styled Map" });
  const map = new google.maps.Map(miniMapRef, {
    zoom: 17,
    center: { lat: pointData.lat, lng: pointData.lng },
    mapTypeControl: false,
  });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
  new google.maps.Marker({
    map: map,
    position: { lat: pointData.lat, lng: pointData.lng },
    animation: google.maps.Animation.DROP,
    title: pointData.pointName,
    icon: MarkerIcon,
  });
  return map;
}
