import { useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentbyId } from "../api";
import { Link } from "react-router-dom";

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
        <button>back</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label>type comment here:</label>
        <input
          onChange={(event) => {
            handleChange(event, "body");
          }}
          required
          type="text"
          value={newComment.body}
        />
        <button type="submit" onSubmit={handleSubmit}>
          submit
        </button>
      </form>
      {submit ? <h2>comment successful</h2> : <></>}
    </>
  );
};
