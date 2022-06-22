import { inferQueryOutput } from "../utils/trpc";

type Post = inferQueryOutput<"post.get-all">[number];

export const PostListing: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        Written by {post.author.name} at {post.publishedAt}
      </p>
      <p>{post.content}</p>
    </div>
  );
};
