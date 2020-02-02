import axios from "axios";
import { store } from "../store";
import { showMessageModal } from "../actions/messageModal";

const API = axios.create({
  baseURL: process.env.API_URL
});

API.interceptors.response.use(
  response =>  response,
  error => {
    if (error.response.status === 500) {
      console.log('SERVER ERROR', error);
      store.dispatch(
        showMessageModal({
          title: "Помилка cерверу",
          message: `Будь ласка, напишіть нам на електронну пошту ${process.env.ADMIN_EMAIL} щоб ми могли швидше усунути проблему.`
        })
      );
    }
    return Promise.reject(error);
  }
);

export default API;
