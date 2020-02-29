import { combineReducers } from "redux";
import appReducer from './app';
import locationsReducer from "./locations";
import pointReducer from './point';
import messageModalReducer from './messageModal';


const rootReducer = combineReducers({
    locations: locationsReducer,
    point: pointReducer,
    messageModal: messageModalReducer,
    app: appReducer,
});

export default rootReducer;