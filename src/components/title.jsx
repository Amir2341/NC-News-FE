import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/usercontext";

export const Title = () => {
  const { user } = useContext(UserContext);
  return (
    <section>
      <div className="title-container">
        <div className="login-container">
          <pre>logged in as: {user.username}</pre>
          <img src={user.avatar_url} className="" alt="avatar"></img>
        </div>
        <div>
          <Link to="/">
            <h1 className="title">NC NEWS </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};
