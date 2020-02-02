import { combineReducers } from "redux";
import locationsReducer from "./locations";
import pointReducer from './point';
import messageModalReducer from './messageModal';

const rootReducer = combineReducers({
    locations: locationsReducer,
    point: pointReducer,
    messageModal: messageModalReducer,
});

export default rootReducer;