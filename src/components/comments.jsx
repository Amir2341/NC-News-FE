import { useEffect, useState } from "react";
import { getCommentsById } from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setComments(comments.data.comments);
    });
  }, [article_id]);

  return (
    <section>
      <h4>Comments:</h4>
      <Link to={`/articles/${article_id}/comments`}>
        <button>post comment</button>
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
            </div>
          );
        })}
      </ul>
    </section>
  );
};
