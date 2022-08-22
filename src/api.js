import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://nc-news20.herokuapp.com/api/articles")
    .then((res) => {
      return res;
    });
};
