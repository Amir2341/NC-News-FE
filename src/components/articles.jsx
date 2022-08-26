import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import Topic from "./Topic";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState("created_at");
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic, order, sort).then((articles) => {
      setArticles(articles.data.articles);
    });
  }, [topic, order, sort]);

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  return (
    <section>
      <Topic />
      sort by:
      <select value={order} onChange={handleOrder}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
      <select value={sort} onChange={handleSort}>
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
        <option value="title">title</option>
        <option value="author">author</option>
      </select>
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
