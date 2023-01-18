import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, addVotes } from "../api";
import Error from "../error";
import { Comments } from "./comments";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Button } from "@mui/material";

export const SingleArticle = ({ isLoading, setIsLoading }) => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [votes, setVotes] = useState(0);
  const [existingError, setExistingError] = useState("");
  const { article_id } = useParams();

  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setIsLoading(true);
        setSingleArticle(article.data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setExistingError(err.response.data);
      });
  }, [article_id]);

  const incrementVotes = (inc_votes) => {
    setVotes(votes + inc_votes);
    addVotes(article_id, inc_votes)
      .then((article) => {
        setVotes(0);
        setSingleArticle(article.data.article);
      })
      .catch((err) => {
        setVotes(0);
        setExistingError(err.response.data);
      });
  };

  if (existingError) return <Error error={"404 : Not Found"} />;
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <section className="article__container">
        <div className="article__card">
          <h2>{singleArticle.title}</h2>
          <h4>{singleArticle.author}</h4>
          <p>{singleArticle.body}</p>
          <h5>votes: {singleArticle.votes + votes}</h5>

          <div>
            <Button
              variant="outlined"
              onClick={() => {
                incrementVotes(1);
              }}
            >
              <AiFillLike className="btn-fill" />
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                incrementVotes(-1);
              }}
            >
              <AiFillDislike className="btn-fill" />
            </Button>
          </div>
          <h5>
            {singleArticle.topic} | {singleArticle.created_at}
          </h5>
        </div>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            setShowComments(true);
          }}
        >
          show comments
        </Button>
        {showComments && <Comments />}
        <Button
          size="small"
          variant="text"
          onClick={() => {
            setShowComments(false);
          }}
        >
          hide comments
        </Button>
      </section>
    );
  }
};
