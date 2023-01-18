import { useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentbyId } from "../api";
import { Link } from "react-router-dom";
import { Button, TextField, Alert } from "@mui/material";

export const PostComment = () => {
  const [newComment, setNewComment] = useState({
    body: "",
    username: "tickle122",
  });
  const [submit, setSubmit] = useState(false);
  const { article_id } = useParams();

  const handleChange = (event, inputName) => {
    setSubmit(false);
    setNewComment((currentComments) => {
      const commentCopy = { ...currentComments };
      commentCopy[inputName] = event.target.value;
      return commentCopy;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    addCommentbyId(article_id, newComment).then(() => {
      setSubmit(true);
      setNewComment({
        body: "",
        username: "tickle122",
      });
    });
  };

  return (
    <>
      <Link to={`/articles/${article_id}`}>
        <Button variant="outlined">back</Button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Comment here"
            placeholder="Placeholder"
            multiline
            onChange={(event) => {
              handleChange(event, "body");
            }}
            required
            type="text"
            value={newComment.body}
          ></TextField>
          <div className="submit-btn__container">
            <Button variant="outlined" type="submit" onSubmit={handleSubmit}>
              submit
            </Button>
          </div>
        </div>
      </form>
      {submit ? <Alert severity="success">comment successful</Alert> : <></>}
    </>
  );
};
