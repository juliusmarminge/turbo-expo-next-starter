import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const HomePage: NextPage = () => {
  const { data: users, isLoading } = trpc.useQuery(["user.get-all"]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!users) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
