import axios from "axios";

export const getArticles = (topic) => {
  return axios
    .get("https://nc-news20.herokuapp.com/api/articles", { params: { topic } })
    .then((res) => {
      return res;
    });
};

export const getTopics = () => {
  return axios.get("https://nc-news20.herokuapp.com/api/topics").then((res) => {
    return res;
  });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news20.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      return res;
    });
};

export const addVotes = (article_id, inc_votes) => {
  return axios
    .patch(`https://nc-news20.herokuapp.com/api/articles/${article_id} `, {
      inc_votes,
    })
    .then((res) => {
      return res;
    });
};

export const getCommentsById = (article_id) => {
  return axios
    .get(`https://nc-news20.herokuapp.com/api/articles/${article_id}/comments`)
    .then((res) => {
      return res;
    });
};

export const addCommentbyId = (article_id, newComment) => {
  return axios.post(
    `https://nc-news20.herokuapp.com/api/articles/${article_id}/comments`,
    newComment
  );
};
