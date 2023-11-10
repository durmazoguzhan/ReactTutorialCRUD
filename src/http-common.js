import axios from "axios";

export default axios.create({
  // baseURL: "http://85.159.71.66:8080/api/",
  baseURL: "https://65477c1a902874dff3ac5dc5.mockapi.io/",
  headers: {
    "Content-type": "application/json",
  },
});
