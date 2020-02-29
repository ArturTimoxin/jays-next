import * as appConst from "../constants";

const initialState = {
    isShowMobileNavBar: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appConst.SET_SHOW_MOBILE_NAV_BAR: {
      return { ...state, isShowMobileNavBar: action.payload };
    }
    default:
      return state;
  }
}

export default appReducer;