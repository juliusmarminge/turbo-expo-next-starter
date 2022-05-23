import React from "react";
import { trpc, inferQueryOutput } from "../utils/trpc";

type User = inferQueryOutput<"user.get-all">[number];

const UserListing: React.FC<{ user: User }> = ({ user }) => {
  const { data: posts, isLoading: loadingPosts } = trpc.useQuery([
    "post.get-by-author-id",
    { authorId: user.id },
  ]);

  if (loadingPosts) {
    return (
      <div>
        Loading posts for user <span>{user.name}</span>...
      </div>
    );
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Posts</h3>
      {posts?.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default UserListing;
