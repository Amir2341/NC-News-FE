import { Link } from "react-router-dom";
import Users from "./users";

export const Title = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="title">NC NEWS </h1>
      </Link>
    </div>
  );
};
