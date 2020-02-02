import * as pointConst from "../constants";

const initialState = {
  pointData: {
    _id: "",
    name: "",
    imageURL: "",
    lat: "",
    lng: "",
    mainImageURL: "",
    pointName: "",
    pointDescription: "",
    neighborhoodPoints: [],
    shopData: {
      address: "",
      tel: "",
      workTime: "",
    },
  },
  map: {},
};

const pointReducer = (state = initialState, action) => {
  switch (action.type) {
    case pointConst.SET_POINT_DATA: {
      return { ...state, pointData: action.payload };
    }
    case pointConst.SET_MINI_MAP: {
      return { ...state, map: action.payload };
    }
    default:
      return state;
  }
}

export default pointReducer;