import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import { Link } from "react-router-dom";
import Topic from "./Topic";
import Error from "../error";

import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const Articles = ({ isLoading, setIsLoading }) => {
  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState("created_at");
  const [existingError, setExistingError] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic, order, sort)
      .then((articles) => {
        setIsLoading(true);
        setArticles(articles.data.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setExistingError(true);
      });
  }, [topic, order, sort]);

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  if (existingError) return <Error error={"404 : Not Found"} />;
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <section>
        <div className="articles__container-select">
          <Topic />
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
              <InputLabel>Order By</InputLabel>
              <Select value={order} onChange={handleOrder} label="Order By">
                <MenuItem value="asc">ascending</MenuItem>
                <MenuItem value="desc">descending</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
              <InputLabel>Sort By</InputLabel>
              <Select value={sort} onChange={handleSort} label="Sort By">
                <MenuItem value="created_at">date</MenuItem>
                <MenuItem value="votes">votes</MenuItem>
                <MenuItem value="comment_count">comments</MenuItem>
                <MenuItem value="title">title</MenuItem>
                <MenuItem value="author">author</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="articles">
          {articles.map((article) => {
            return (
              <Card
                sx={{ mx: 1 }}
                key={article.article_id}
                className="card"
                variant="outlined"
              >
                <CardContent key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <Typography fontSize={{ fontSize: 20 }}>
                      {article.title}
                    </Typography>
                  </Link>
                  <Typography>{article.author}</Typography>
                  <Typography>topic: {article.topic}</Typography>
                  <Typography>created at: {article.created_at}</Typography>
                  <Typography>votes: {article.votes}</Typography>
                  <Typography>
                    comment count: {article.comment_count}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    );
  }
};
