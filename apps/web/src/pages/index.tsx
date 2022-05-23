import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const HomePage: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { name: "Johna" }]);

  return <div>{isLoading ? <p>Loading...</p> : <p>{data}</p>}</div>;
};

export default HomePage;
