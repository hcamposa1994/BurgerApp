import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-79f29.firebaseio.com/"
});

export default instance;
