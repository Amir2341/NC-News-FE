import { useEffect } from "react";
import { getArticles } from "../api";

export const Articles = ({ articles, setArticles }) => {
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles.data.articles);
    });
  }, []);
  console.log(articles);
  return (
    <section>
      <ul>
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <h2>{article.title}</h2>
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
