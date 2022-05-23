import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { PostListing } from "../components/PostListing";

const HomePage: NextPage = () => {
  const { data: posts, isLoading } = trpc.useQuery(["post.get-all"]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts?.map((post) => (
        <PostListing key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
