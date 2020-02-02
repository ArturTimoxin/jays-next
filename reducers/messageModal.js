import * as messageModalConst from "../constants";

const initialState = {
  isShow: false,
  title: "",
  message: ""
};

const messageModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case messageModalConst.SHOW_MESSAGE_MODAL: {
      return {
        ...state,
        isShow: true,
        title: action.payload.title,
        message: action.payload.message
      };
    }
    case messageModalConst.CLOSE_MESSAGE_MODAL: {
      return { ...state, isShow: false, title: '', message: '' };
    }
    default:
      return state;
  }
};

export default messageModalReducer;
