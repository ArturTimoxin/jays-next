import { SET_SHOW_MOBILE_NAV_BAR} from "../constants";

export const setShowMobileNavBar = (state) => {
    return dispatch => {
        dispatch({
            type: SET_SHOW_MOBILE_NAV_BAR,
            payload: state,
        })
    }
}