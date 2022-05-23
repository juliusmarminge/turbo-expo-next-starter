import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import UserListing from "../components/UserListing";

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
        <UserListing key={user.id} user={user} />
      ))}
    </div>
  );
};

export default HomePage;
