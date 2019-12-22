import axios from "axios";

export default axios.create({
  baseURL: "https://it-blog-posts.herokuapp.com/api/",
  responseType: "json"
});