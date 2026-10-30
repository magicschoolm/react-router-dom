import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  console.log(users);

  return (
    <div className="Users">
      {users.map((user) => {
        return (
          <Link to={String(user.id)} key={user.id}>
            <div key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Users;