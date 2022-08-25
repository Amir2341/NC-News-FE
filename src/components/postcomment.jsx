import { useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentbyId } from "../api";
import { Link } from "react-router-dom";

export const PostComment = () => {
  const [newComment, setNewComment] = useState({
    body: "",
    username: "tickle122",
  });
  const { article_id } = useParams();

  const handleChange = (event, inputName) => {
    setNewComment((currentComments) => {
      const commentCopy = { ...currentComments };
      commentCopy[inputName] = event.target.value;
      return commentCopy;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setNewComment((prevComment) => {
      const prevCopy = { ...prevComment };
      const addingComment = { ...prevCopy, newComment };
      return addingComment;
    });

    addCommentbyId(article_id, newComment);
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
        ></input>
        <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
      </form>
    </>
  );
};
