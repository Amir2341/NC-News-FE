import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

export const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setSingleArticle(article.data.article);
    });
  }, [article_id]);

  return (
    <section>
      <h2>{singleArticle.title}</h2>
      <h4>{singleArticle.author}</h4>
      <p>{singleArticle.body}</p>
      <h5>
        comments: {singleArticle.comment_count}, votes: {singleArticle.votes}
      </h5>
      <h5>
        {singleArticle.topic} | {singleArticle.created_at}
      </h5>
    </section>
  );
};
