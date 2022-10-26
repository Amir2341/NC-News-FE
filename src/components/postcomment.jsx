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
        <button className="back-btn">back</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label>Comment:</label>
        <div>
          <input
            className="comment-box"
            onChange={(event) => {
              handleChange(event, "body");
            }}
            required
            type="text"
            value={newComment.body}
          />
          <div className="submit-btn__container">
            <button
              className="submit-btn"
              type="submit"
              onSubmit={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
      {submit ? <h2>comment successful</h2> : <></>}
    </>
  );
};
