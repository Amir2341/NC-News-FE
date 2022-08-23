import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://nc-news20.herokuapp.com/api/articles")
    .then((res) => {
      return res;
    });
};

export const getTopics = () => {
  return axios.get("https://nc-news20.herokuapp.com/api/topics").then((res) => {
    return res;
  });
};

export const getArticlesByTopic = (topic) => {
  return axios.get(
    `https://nc-news20.herokuapp.com/api/articles/?topic=${topic}`
  );
};
