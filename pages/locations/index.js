import React, { Component } from "react";
import { connect } from "react-redux";
import { TOGGLE_LOCATIONS_MENU } from "../../constants";
import { getLocationsAndSetMap, getLocations } from "../../actions/locations";
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
