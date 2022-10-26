import { useEffect, useState } from "react";
import { deleteCommentById, getCommentsById } from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      {isDeleted ? <p>comment deleted</p> : <></>}
      <Link to={`/articles/${article_id}/comments`}>
        <button className="btn-post">post comment</button>
      </Link>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <h6>
                {comment.author} | {comment.created_at}
              </h6>
              <p>{comment.body}</p>
              <h6>votes: {comment.votes}</h6>
              {comment.author === "tickle122" ? (
                <button
                  className="btn-delete"
                  onClick={() => deleteComment(comment.comment_id)}
                >
                  delete comment
                </button>
              ) : null}
            </div>
          );
        })}
      </ul>
    </section>
  );
};
