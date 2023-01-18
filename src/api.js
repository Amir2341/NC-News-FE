import axios from "axios";

export const getArticles = (topic, order, sort_by) => {
  return axios
    .get("https://nc-news.cyclic.app/api/articles", {
      params: { topic, order, sort_by },
    })
    .then((res) => {
      return res;
    });
};

export const getTopics = () => {
  return axios.get("https://nc-news.cyclic.app/api/topics").then((res) => {
    return res;
  });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news.cyclic.app/api/articles/${article_id}`)
    .then((res) => {
      return res;
    });
};

export const addVotes = (article_id, inc_votes) => {
  return axios
    .patch(`https://nc-news.cyclic.app/api/articles/${article_id} `, {
      inc_votes,
    })
    .then((res) => {
      return res;
    });
};

export const getCommentsById = (article_id) => {
  return axios
    .get(`https://nc-news.cyclic.app/api/articles/${article_id}/comments`)
    .then((res) => {
      return res;
    });
};

export const addCommentbyId = (article_id, newComment) => {
  return axios.post(
    `https://nc-news.cyclic.app/api/articles/${article_id}/comments`,
    newComment
  );
};

export const deleteCommentById = (comment_id) => {
  return axios
    .delete(`https://nc-news.cyclic.app/api/comments/${comment_id}`)
    .then((res) => {
      return res;
    });
};

export const getUsers = () => {
  return axios.get("https://nc-news.cyclic.app/api/users").then((res) => {
    return res.data;
  });
};
