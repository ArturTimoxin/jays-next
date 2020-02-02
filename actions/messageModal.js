import { SHOW_MESSAGE_MODAL, CLOSE_MESSAGE_MODAL } from "../constants";

export const showMessageModal = ({ title, message }) => {
    return dispatch => {
        dispatch({
            type: SHOW_MESSAGE_MODAL,
            payload: { title, message }
        })
    }
}

export const closeMessageModal = () => {
    return dispatch => {
        dispatch({
            type: CLOSE_MESSAGE_MODAL
        })
    }
}