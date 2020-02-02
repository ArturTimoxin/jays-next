import React, { Component } from "react";
import { connect } from "react-redux";
import { TOGGLE_LOCATIONS_MENU } from "../../constants";
import { getLocationsAndSetMap, getLocations } from "../../actions/locations";
import LocationItem from "../../components/LocationItem";
class Locations extends Component {
  componentDidMount() {
    this.props.getLocationsAndSetMap(this.map);
  }

  static async getInitialProps({ store }) {
    await store.dispatch(getLocations());
    return store.getState().locations;
  }

  render() {
    const { points } = this.props;
    return (
      <div className='wrap-locations'>
        <div className="mapWrapper">
          <div
            id="map"
            ref={node => {
              this.map = node;
            }}
          />
        </div>
        <div className="wrapperLocationsItems">
          <h2 className="titleLocation">JAYS POINTS</h2>
          <div className="locationsItems">
            {points.map(elem => (
              <LocationItem
                key={elem._id}
                id={elem._id}
                imageURL={elem.imageURL}
                pointName={elem.pointName}
              />
            ))}
            {points.length % 2 && (
              <div className='location-empty-block-for-wrap'/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleLocationsMenu: () => dispatch({ type: TOGGLE_LOCATIONS_MENU }),
    getLocationsAndSetMap: mapRef => dispatch(getLocationsAndSetMap(mapRef))
  };
};

export default connect(null, mapDispatchToProps)(Locations);
