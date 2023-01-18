import { useEffect, useState } from "react";
import { deleteCommentById, getCommentsById } from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Alert, Card, CardContent, Typography } from "@mui/material";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setComments(comments.data.comments);
    });
  }, [article_id]);

  const deleteComment = (comment_id) => {
    setComments((currComments) => {
      return currComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
    });
    deleteCommentById(comment_id)
      .then(() => {
        setIsDeleted(true);
      })
      .catch(() => {
        setIsDeleted(false);
      });
  };

  return (
    <section>
      <h4>Comments:</h4>
      {isDeleted ? <Alert severity="success">comment deleted</Alert> : <></>}
      <Link to={`/articles/${article_id}/comments`}>
        <Button variant="outlined" size="small">
          post comment
        </Button>
      </Link>
      <ul>
        {comments.map((comment) => {
          return (
            <Card
              sx={{ minWidth: 100, mb: -5, mx: -6, transform: "scale(0.8)" }}
              variant="outlined"
              key={comment.comment_id}
            >
              <CardContent>
                <h6>
                  {comment.author} | {comment.created_at}
                </h6>
                <Typography>{comment.body}</Typography>
                <h6>votes: {comment.votes}</h6>
                {comment.author === "tickle122" ? (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => deleteComment(comment.comment_id)}
                  >
                    delete comment
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </ul>
    </section>
  );
};
