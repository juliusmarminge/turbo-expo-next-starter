import { View, Text } from "react-native";
import { inferQueryOutput } from "../utils/trpc";

type Post = inferQueryOutput<"post.get-all">[number];

export const PostListing: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>Written by {post.author.name}</Text>
      <Text>{post.content}</Text>
    </View>
  );
};
