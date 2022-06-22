import { SafeAreaView, FlatList, Text } from "react-native";
import { trpc } from "../utils/trpc";
import { PostListing } from "../components/PostListing";

const HomeScreen = () => {
  const { data: posts, isLoading } = trpc.useQuery(["post.get-all"]);

  return (
    <SafeAreaView>
      <Text>Posts</Text>
      {isLoading && <Text>Loading posts...</Text>}
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => <PostListing post={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
