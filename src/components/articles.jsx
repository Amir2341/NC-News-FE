import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import Topic from "./Topic";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles.data.articles);
    });
  }, [topic]);

  return (
    <section>
      <Topic />
      <ul>
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <h4>{article.author}</h4>
              <li>topic: {article.topic}</li>
              <li>created at: {article.created_at}</li>
              <li>votes: {article.votes}</li>
              <li>comment count: {article.comment_count}</li>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
