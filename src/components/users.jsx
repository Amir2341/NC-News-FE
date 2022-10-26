import { useEffect, useState } from "react";
import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <div>
        {users.map((user) => {
          return (
            <div key={user.username}>
              <h5>{user.username}</h5>
              <img
                classname="user-img"
                src={user.avatar_url}
                alt="avatar"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
